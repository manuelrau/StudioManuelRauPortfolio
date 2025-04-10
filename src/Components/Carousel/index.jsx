import {useStoryblok} from "@storyblok/react";
import {AboutPtag, HeadlineH1} from "../../Pages/About/styles.js";
import React from "react";

const Carousel = () => {
    const story = useStoryblok("home", {version: "draft"})
    console.log(story)

    return (
        <>
            {
                story.content?.body[0]?.BigPhoto?.map((section, index) => (
                    <div key={index}>
                        {section.filename && (
                            <img src={section.filename}/>
                        )}
                    </div>
                ))
            }
        </>
    )
}


export default Carousel;