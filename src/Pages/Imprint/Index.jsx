import React from 'react';
import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import {GlobalStyle, FooterContainer} from '../../styles.js'
import {Container} from "./styles.js";
import {useStoryblok} from "@storyblok/react";

function Imprint ()  {
    const story = useStoryblok("imprint", {version:"draft"})
    console.log(story);
    return(
        <>
            <GlobalStyle />
            <Header />

            <Container>
                {story.map((s, t) => (
                    <p key={t}>{s}</p>
                ))

                }

            </Container>

            <FooterContainer>
                <Footer />
            </FooterContainer>

        </>
    )
}

export default Imprint;