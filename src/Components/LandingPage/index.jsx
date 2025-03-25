import React from 'react';
import { useStoryblok} from "@storyblok/react";
import {HeaderImage} from "./styles.js";
import Categories from "../Categories/styles.js";

function LandingPage() {
    const story = useStoryblok("home", {version: "draft"})

    if (!story) return <p>Laden...</p>;
    return(
            <>
                <div>
                    <HeaderImage $src={story.content?.header.filename} $alt={story.content?.header.alt}/>
                </div>
                <div>
                    <Categories />
                </div>
            </>
    )
}



export default LandingPage;