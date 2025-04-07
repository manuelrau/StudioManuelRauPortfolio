
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
                full: res.data.story,
            };
        } catch (err) {
            console.error(`Fehler bei UUID ${uuid} (${version}) :`, err);
            return {
                name: `Fehler bei ${uuid}`,
                tags: `Fehler bei ${uuid}`,
                full: null,
            };
        }
    });
    console.log(getDataByVersion.name)
    console.log(getDataByVersion.tags)
    console.log(getDataByVersion.full)
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