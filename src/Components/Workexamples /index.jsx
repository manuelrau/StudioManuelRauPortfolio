import react from 'react';
import {useStoryblok} from "@storyblok/react";
import {Img, Wrapper} from './styles.js'

const WorkExamples = () => {
    const story = useStoryblok("Workexamples", {"draft"})

    if(!story) return <p> Laden... </p>;
    return (
        <>
            <Wrapper>
                <Img />
            </Wrapper>
        </>
    )
}

export default WorkExamples