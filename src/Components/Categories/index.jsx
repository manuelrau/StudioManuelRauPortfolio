import react from 'react'
import {useStoryblok} from "@storyblok/react";

const Categories = () => {
    const cat = useStoryblok("stories", {version: "draft"})


    return(
        <>
            <p>Test</p>
        </>
    )
}

export default Categories