import { useState, useEffect } from "react";
import { useStoryblokApi } from "@storyblok/react";


export function useStoryblokfetch (slug, language, options = {}) {
    const storyblokApi = useStoryblokApi();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug || !language) return;

        console.log("Lang:", language)
        console.log("Was ist der Slug: ",slug)
        console.log("Was sind die Optionen: ",options)

        setLoading(true);
        storyblokApi.get(`cdn/stories/${slug}`, {
            ...options,
            version: "published",
            language: language,
        })
            .then(({ data }) => {
                console.log(data);
                setStory(data.story);
                setError(null);
            })
            .catch(err => {
                setError(err);
                setStory(null);
            })
            .finally(() => setLoading(false));
    }, [slug, language, storyblokApi]);


    return {story, loading, error}
}