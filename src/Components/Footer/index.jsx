import { useStoryblok } from "@storyblok/react";
import {Container, SocialMedia, SocialContainer, Icon, Text, Wrapper, Wrapp} from "./styles.js"
import React, {useRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
    const story = useStoryblok("footer", {version: "draft"})
    const footerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (!story.content) return;
        const footer = footerRef.current;
        console.log('FooterRef:', footer);
        if(!footer) return;

        if(location.pathname ==="/about") {
            footer.classList.add("orange");
        } else {
            footer.classList.remove("orange");
        }
    }, [location, story.content])


    console.log(story)
    if (!story.content) return <p>Laden...</p>;
    return(
        <Wrapper>
            <Container ref={footerRef}>

                <Text>{story.content?.Body[0].Text}</Text>
            </Container>
            <Wrapp>
                <Link className={story.content?.Body[0].Imprint.cached_url}
                      to={story.content?.Body[0].Imprint.cached_url}>{story.content?.Body[0].Imprint.cached_url}</Link>
                <SocialMedia
                    href={`mailto:${story.content?.Body[0].email.url}`}> {story.content?.Body[0].email.cached_url}</SocialMedia>
                <SocialContainer>
                    <Icon src={story.content?.Body[0].Icon.filename} alt={story.content?.Body[0].Icon.alt}/>
                    <SocialMedia href={story.content?.Body[0].SocialMedia.url} target="_blank">@manuelrrrau</SocialMedia>
                </SocialContainer>

            </Wrapp>
            <Text>{story.content?.Body[0].Copyright}</Text>
        </Wrapper>


    )
}

export default Footer