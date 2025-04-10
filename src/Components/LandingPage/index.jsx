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
                    <HeaderImage>
                        <Carousel story={story} />
                    </HeaderImage>


                </div>
                <div>
                </div>
            </>
    )
}



export default LandingPage;