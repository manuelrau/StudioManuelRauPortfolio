import react from 'react'
import {useStoryblok} from "@storyblok/react";
import {Wrapper} from "./styles.js";

const Categories = () => {
    const cat = useStoryblok("stories", {version: "draft"})


    return(
        <>
            <Wrapper>
                <p>Test</p>
            </Wrapper>
        </>
    )
}

export default Categories