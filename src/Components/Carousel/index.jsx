import react from 'react';
import {useStoryblok} from "@storyblok/react";

const Carousel = () => {
    const story = useStoryblok("home", {version: "draft"})
    console.log(story)

    return (
        <>
        </>
    )
}

export default Carousel;