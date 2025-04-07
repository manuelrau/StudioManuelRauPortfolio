
import StoryblokClient from "storyblok-js-client";

const SbClient = new StoryblokClient ({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
});

export const getDataByVersion = async (uuids, version) => {
    console.log("getTitlesByVersion INPUT:", uuids, typeof uuids, Array.isArray(uuids));
    const titlePromises = uuids.map(async (uuid) => {
        try {
            const res = await SbClient.get(`cdn/stories/${uuid}`, {
                version,
                find_by:"uuid",
            });

            return {
                name: res.data.story.name,
                tags: res.data.story.tags,
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

    return await Promise.all(titlePromises);
}