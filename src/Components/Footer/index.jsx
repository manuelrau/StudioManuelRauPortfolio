import { useStoryblok } from "@storyblok/react";
import {Container, SocialMedia, SocialContainer, Icon, Text, Wrapper, Wrapp, LogoAnimation, SectionFooter} from "./styles.js"
import React, {useRef, useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import  splitting  from "splitting"
import {useStoryblokfetch} from "../../Hook/useStoryblokfetch.jsx";

const Footer = () => {
    //const story = useStoryblok("footer", {version: "draft"})

    const { lang } = useParams(); // Sprache aus der URL holen
    const activeLang = lang === "de" ? "de-de" : (lang || "en"); // Englisch als Fallback
    const { story, loading, error } = useStoryblokfetch("footer", activeLang);

    console.log(story);

    const footerRef = useRef(null);
    const location = useLocation();

    const logoAnimationRef = useRef(null)

    useEffect(() => {
        if (!story?.content) return;
        const footer = footerRef.current;
        console.log('FooterRef:', footer);
        if(!footer) return;

        if(location.pathname ==="/about") {
            footer.classList.add("orange");
        } else {
            footer.classList.remove("orange");
        }
    }, [location, story?.content])

    useEffect(() => {
        if (story?.content && logoAnimationRef.current) {
            logoAnimationRef.current.innerHTML = story.content.Body[0].LogoBig;

            const wordsResults = splitting({ target: logoAnimationRef.current, by: 'words' });

            // Führe Splitting aus
            const charResults = splitting({ target: wordsResults[0].words, by: 'chars' });
            console.log('Splitting results (words, then chars):', wordsResults, charResults); // Zur Überprüfung

        }
    }, [story?.content?.Body[0].LogoBig]);


    console.log("Footer:", story)
    if (loading) return <p>Laden...</p>;
    if (error) return <p>Fehler: {error.message}</p>;

    if (!story?.content) return <p>Loading content ...</p>;
    return(
        <SectionFooter>
            <Wrapper>
                <Container ref={footerRef}>

                    <Text>{story.content?.Body[0].Text}</Text>
                </Container>
                <Wrapp>
                    <Link className={story.content?.Body[0].Imprint.cached_url}


                          to={`/${lang}/${story.content?.Body[0].Imprint.cached_url}`}>{story.content?.Body[0].Imprint.cached_url}</Link>
                    <SocialMedia
                        href={`mailto:${story.content?.Body[0].email.url}`}> {story.content?.Body[0].email.cached_url}</SocialMedia>
                    <SocialContainer>
                        <Icon src={story.content?.Body[0].Icon.filename} alt={story.content?.Body[0].Icon.alt}/>
                        <SocialMedia href={story.content?.Body[0].SocialMedia.url} target="_blank">@Manuelrrrau</SocialMedia>
                    </SocialContainer>

                </Wrapp>
                <Text>{story.content?.Body[0].Copyright}</Text>
            </Wrapper>
            <LogoAnimation ref={logoAnimationRef}>{story.content?.Body[0].LogoBig}</LogoAnimation>
        </SectionFooter>


    )
}

export default Footer