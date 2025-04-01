import StoryblokClient from "storyblok-js-client";

const sb = new StoryblokClient({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt"
});

const getStoryByUUID = async (uuid) => {
    const res = await sb.get(`cdn/stories/${uuid}`, {
        version: "draft"
    });
    console.log(res)
    return res.data.story.name;
};
