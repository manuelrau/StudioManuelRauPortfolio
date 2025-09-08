
import StoryblokClient from "storyblok-js-client";

const SbClient = new StoryblokClient ({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
});

export const getDataByVersion = async (uuids, version) => {
    //console.log("getTitlesByVersion INPUT:", uuids, typeof uuids, Array.isArray(uuids));
    const titlePromises = uuids.map(async (uuid) => {
        try {
            const res = await SbClient.get(`cdn/stories/${uuid}`, {
                version,
                find_by:"uuid",
            });
            return {
                name: res.data.story.name,
                tags: res.data.story.tag_list,
                slug: res.data.story.full_slug,
                img: res.data.story.content.Header.filename,
                //full: res.data.story,
            };
        } catch (err) {
            console.error(`Fehler bei UUID ${uuid} (${version}) :`, err);
            return {
                name: `Fehler bei ${uuid}`,
                tags: [],
                slug: `Fehler bei ${uuid}`,
                img: `Fehler bei ${uuid}`,
                error: true,
            };
        }
    });
    return await Promise.all(titlePromises);
}

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

export const getArticlesWithTags = async () => {
    try {
        const res = await SbClient.get("cdn/stories", {
            version: "draft",
            starts_with: "articles/", // oder dein Pfad
            per_page: 100,
        });

        // filter only stories with tag_list
        const storiesWithTags = res.data.stories.filter((story) => story.tag_list && story.tag_list.length > 0);

        return storiesWithTags.map((story) => ({
            name: story.name,
            slug: story.slug,
            tags: story.tag_list,


        }));
    } catch (err) {
        console.error("Fehler beim Laden der Kategorien:", err);
        return [];
    }
};

export const getSlugArticle = async (slug) => {
    try {
        const res = await SbClient.get(`cdn/stories/articles/${slug}`, {
            version: "draft",
        });
        return res.data.story;
    } catch (err) {
        console.error("Artikel nicht gefunden:", err);
        throw err;
    }

};

export const getImagesofArticle = async (content) => {

    console.log(content)
    if (!content || !Array.isArray(content.Wrapper)) {
        return ['no Image'];
    }

    return content.Wrapper.filter(item => item.component === "ImagesArticle");

}
