import React from 'react';
import { useStoryblok} from "@storyblok/react";

function LandingPage() {
    const story = useStoryblok("home", {version: "draft"})

    if (!story) return <p>Laden...</p>;
    return(
            <>
                <div>
                    <h1>{story.name}</h1>
                    <h2>{story.content?.body[0].headline}</h2>
                    <p>{story.published_at}</p>
                    <p>{story.content?.text}</p>
                </div>
            </>
    )
}



export default LandingPage;