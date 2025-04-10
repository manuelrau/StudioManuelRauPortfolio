import { useStoryblok } from "@storyblok/react";
import {Container, SocialMedia, SocialContainer, Icon, Text} from "./styles.js"
import React from "react";

const Footer = () => {
    const story = useStoryblok("footer", {version: "draft"})
    console.log(story)
    if (!story.content) return <p>Laden...</p>;
    return(

        <Container>

            <Text>{story.content?.Body[0].Text}</Text>
            <SocialMedia href={`mailto:${story.content?.Body[0].email.url}`}> {story.content?.Body[0].email.cached_url}</SocialMedia>
            <SocialContainer>
                <Icon src={story.content?.Body[0].Icon.filename} alt={story.content?.Body[0].Icon.alt}/>
                <SocialMedia href={story.content?.Body[0].SocialMedia.url} target="_blank">@manuelrrrau</SocialMedia>
            </SocialContainer>

        </Container>

    )
}

export default Footer