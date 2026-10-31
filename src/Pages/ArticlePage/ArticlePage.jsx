import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../../Components/Header/index.jsx";
import { GlobalStyle, FooterContainer } from "../../styles.js";
import Footer from "../../Components/Footer/index.jsx";
import {fetchArticlePageRandom, getImagesofArticle} from "../../Services/fetchingAPI.js";
import CarouselCompont from "../../Components/Article/CarouselCompont /index.jsx";
import { Wrapper, ArticleContentWrap, ArticleSidebar } from "./styles.js";
import RelatedArticle from "../../Components/Article/Related/index.jsx";
import {useStoryblok, StoryblokComponent} from "@storyblok/react";
import Images from "../../Components/Article/Image/index.jsx";
import InformationBlock from "../../Components/Article/InformationBlock/index.jsx";
import {useStoryblokfetch} from "../../Hook/useStoryblokfetch.jsx";

export default function ArticlePage() {
    const { slug, lang } = useParams(); // Sprache + Artikel-Slug aus der URL
    const activeLang = lang === "de" ? "de-de" : (lang || "en"); // Englisch als Fallback
    const combinedSlug = `articles/${slug || ''}`; // Storyblok legt Artikel unter "articles/" ab
    const { story, loading, error } = useStoryblokfetch(combinedSlug, activeLang);

    const [imageData, setImageData] = useState(null);
    const [titles, setTitles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    // Für die "weitere Artikel"-Vorschau am Seitenende wird separat die komplette
    // Artikelübersicht (index-Story) geladen, aus der die UUIDs für fetchArticlePageRandom kommen
    const indexStory = useStoryblok("index", {version: "published"})

    useEffect(() => {
        const uuidsRaw = indexStory?.content?.body?.[0]?.Title;
        const isReady = Array.isArray(uuidsRaw) && uuidsRaw.length > 0;
        if (!isReady || hasLoaded) return;

        fetchArticlePageRandom(uuidsRaw, "published").then((results) => {
            setTitles(results);
            setHasLoaded(true);
        });
    }, [indexStory, hasLoaded]);

    useEffect(() => {
        if (!story?.content) return;
        getImagesofArticle(story.content).then(setImageData);
    }, [story]);

    if (loading) return <p>Laden...</p>;
    if (error) return <p>Fehler: {error.message}</p>;
    if (!story?.content) return <p>Kein Inhalt gefunden.</p>;

    // Information Block & Tags gehören immer in die Sidebar - die Tags werden dabei
    // direkt innerhalb von InformationBlock mitgerendert (siehe tagsBlok weiter unten),
    // alle anderen Content-Bausteine landen im Hauptbereich
    const SIDEBAR_COMPONENTS = ["Information Block", "Tags"];
    const contentBloks = story.content?.Content ?? [];
    const informationBlockBlok = contentBloks.find((blok) => blok.component === "Information Block");
    const tagsBlok = contentBloks.find((blok) => blok.component === "Tags");
    const mainBloks = contentBloks.filter((blok) => !SIDEBAR_COMPONENTS.includes(blok.component));

    return (
        <>
            <GlobalStyle/>
            <Header/>

            <Wrapper>
                <ArticleContentWrap>
                    {mainBloks.map((blok) => (
                        <StoryblokComponent blok={blok} key={blok._uid} />
                    ))}
                    {(informationBlockBlok || tagsBlok) && (
                        <ArticleSidebar>
                            <InformationBlock blok={informationBlockBlok} tagsBlok={tagsBlok} />
                        </ArticleSidebar>
                    )}
                </ArticleContentWrap>

                <CarouselCompont/>

                <Images story={imageData}/>

                <RelatedArticle story={titles}/>
            </Wrapper>

            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </>
    )
}