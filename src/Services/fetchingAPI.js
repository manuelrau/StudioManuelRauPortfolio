import StoryblokClient from "storyblok-js-client";

// gleicher Token wie in storyblokinit.jsx/loadtheme.jsx, aus der .env statt hart codiert
const SbClient = new StoryblokClient({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
});

// Lädt mehrere Storys per UUID (z.B. für die Index-Liste) und reduziert sie auf die
// Felder, die die UI tatsächlich braucht.
export const getDataByVersion = async (uuids, version) => {
    try {
        const res = await SbClient.get("cdn/stories", {
            version,
            by_uuids: uuids.join(","),
            per_page: 100,
        });
        return res.data.stories.map((story) => ({
            name: story.name,
            tags: story.tag_list,
            slug: story.full_slug,
            img: story.content.Header.filename,
        }));
    } catch (err) {
        console.error("Fehler beim Laden der Artikel:", err);
        return [];
    }
}

// Lädt pro UUID eine einzelne Story (für die "weitere Artikel"-Vorschau am Seitenende).
// Einzelabfragen statt Batch, weil wir hier nur Titel+Bild brauchen und die Reihenfolge
// der UUIDs erhalten bleiben soll (Promise.all behält die Reihenfolge, by_uuids nicht garantiert).
export const fetchArticlePageRandom = async (uuids, version) => {
    const titlePromises = uuids.map(async (uuid) => {
        try {
            const res = await SbClient.get(`cdn/stories/${uuid}`, {
                version,
                find_by:"uuid",
            });

            return {
                ArticlePage: {
                    title: res.data.story.name,
                    image: res.data.story.content.Header.filename,
                    alt: res.data.story.content.Header.alt,
                    slug: res.data.story.full_slug
                }
            };
        } catch (err) {
            console.error(`Fehler bei UUID ${uuid} (${version}) :`, err);
            return {
                ArticlePage: {
                    title: `Fehler bei ${uuid}`,
                    image: `Fehler bei ${uuid}`,
                    alt: `Fehler bei ${uuid}`,
                    slug: `Fehler bei ${uuid}`,
                }

            };
        }
    });
    return await Promise.all(titlePromises);
}

// Filtert aus dem Content-Baum eines Artikels die Bildergalerie-Bausteine heraus.
export const getImagesofArticle = async (content) => {
    if (!content || !Array.isArray(content.Wrapper)) {
        return ['no Image'];
    }

    return content.Wrapper.filter(item => item.component === "ImagesArticle");
}
