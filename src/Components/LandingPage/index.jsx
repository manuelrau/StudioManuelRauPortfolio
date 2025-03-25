import React from 'react';
import { useStoryblok} from "@storyblok/react";

function LandingPage() {
    const story = useStoryblok("home", {version: "draft"})

    if (!story) return <p>Laden...</p>;
    return(
            <>
                <div>
                    <h2>{story.content?.body[0].headline}</h2>
                    <p>{story.content?.text}</p>

                    <img src={story.content?.header.filename} alt={story.content?.header.alt} />
                </div>
            </>
    )
}



export default LandingPage;