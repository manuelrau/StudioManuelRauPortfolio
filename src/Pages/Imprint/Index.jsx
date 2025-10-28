import React from 'react';
import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import {GlobalStyle, FooterContainer} from '../../styles.js'
import {Container, TextPart} from "./styles.js";
import {useStoryblok} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import {useParams} from "react-router-dom";
import {useStoryblokfetch} from "../../Hook/useStoryblokfetch.jsx";

function Imprint ()  {

    // Sprache
    const { lang } = useParams(); // Sprache aus der URL holen
    const activeLang = lang === "de" ? "de-de" : (lang || "en"); // Englisch als Fallback
    const { story, loading, error } = useStoryblokfetch("imprint", activeLang);

    console.log(story?.content?.body[0]?.Text);


    if (loading) return <p>Laden...</p>;
    if (error) return <p>Fehler: {error.message}</p>;
    if (!story?.content) return <p>Kein Inhalt gefunden.</p>;

    return(
        <>
            <GlobalStyle />
            <Header />

            <Container>
                {story?.content?.body[0]?.Text?.content.map((node, index) => (
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