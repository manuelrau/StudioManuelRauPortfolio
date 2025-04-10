import React from 'react';
import Carousel from '../../Components/Carousel/index.jsx'
import { useStoryblok} from "@storyblok/react";
import {HeaderImage} from "./styles.js";

function LandingPage() {
    const story = useStoryblok("home", {version: "draft"})

    if (!story.content) return <p>Laden...</p>;
    return(
            <>
                <div>
                    <Carousel />
                    <HeaderImage $src={story.content?.header.filename} $alt={story.content?.header.alt}/>
                </div>
                <div>
                </div>
            </>
    )
}



export default LandingPage;