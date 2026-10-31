import { useState, useEffect } from "react";
import { useStoryblokApi } from "@storyblok/react";


export function useStoryblokfetch (slug, language, options = {}) {
    const storyblokApi = useStoryblokApi();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hinweis: "options" steht bewusst nicht in den Dependencies - wird meist als neues
    // Inline-Objekt übergeben, das würde den Effect bei jedem Render erneut auslösen.
    // Lädt also nur neu, wenn sich slug oder language ändern.
    useEffect(() => {
        if (!slug || !language) return;

        setLoading(true);
        storyblokApi.get(`cdn/stories/${slug}`, {
            ...options,
            version: "published",
            language: language,
        })
            .then(({ data }) => {
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
