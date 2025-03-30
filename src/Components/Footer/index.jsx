import react from 'react';
import { useStoryblok } from "@storyblok/react";
import {Container, SocialMedia, SocialContainer, Icon} from "./styles.js"
import React from "react";

const Footer = () => {
    const story = useStoryblok("footer", {version: "draft"})
    console.log(story)
    if (!story.content) return <p>Laden...</p>;
    return(

            <Container>

                <p>{story.content?.Body[0].Text}</p>
                <SocialContainer>
                    <Icon src={story.content?.Body[0].Icon.filename} alt={story.content?.Body[0].Icon.alt}/>
                    <SocialMedia href={story.content?.Body[0].SocialMedia.url} target="_blank">Instagram</SocialMedia>
                </SocialContainer>

            </Container>

    )
}

export default Footer