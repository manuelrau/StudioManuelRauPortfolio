import React from 'react';
import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import {GlobalStyle, FooterContainer} from '../../styles.js'
import {Container, TextPart} from "./styles.js";
import {useStoryblok} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

function Imprint ()  {
    const story = useStoryblok("imprint", {version:"draft"})
    console.log(story.content?.body[0]?.Text);
    return(
        <>
            <GlobalStyle />
            <Header />

            <Container>
                {story.content?.body[0]?.Text?.content.map((node, index) => (
                    <TextPart key={index}>{render({type: 'doc', content:[node]})}</TextPart>
                ))}

            </Container>

            <FooterContainer>
                <Footer />
            </FooterContainer>

        </>
    )
}

export default Imprint;