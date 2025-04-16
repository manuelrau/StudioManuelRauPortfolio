import React from 'react';
import Carousel from '../../Components/Carousel/index.jsx'
import { useStoryblok} from "@storyblok/react";
import {HeaderImage} from "./styles.js";
import Images from "../Images/index.jsx";
import Categories from "../Categories/index.jsx";

function LandingPage({clickedTags = [] }) {
    const story = useStoryblok("home", {version: "draft"})

    console.log(clickedTags)
    console.log(story)
    if (!story.content) return <p>Laden...</p>;
    return(
            <>
                <div>
                    <HeaderImage>
                        <Carousel story={story} />
                    </HeaderImage>
                    {clickedTags.map((tag, index) => (

                        <p key={index}>{tag}</p>
                    ))}
                    <Images story = {story} clickedTags={clickedTags} />


                </div>
            </>
    )
}



export default LandingPage;