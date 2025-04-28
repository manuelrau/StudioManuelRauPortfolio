import React, { useEffect, useState } from 'react';
import { useStoryblok} from "@storyblok/react";
import Header from "../../Components/Header/index.jsx"
import Footer from "../../Components/Footer/index.jsx";
import {FooterContainer, GlobalStyle} from "../../styles.js";
import { Link } from 'react-router-dom';
import {IndexWrapper, StyledLink} from "../styles.js";
import {Tags, Wrapper, Imagehover} from "./styles.js"

import { getDataByVersion } from "../../Services/fetchingAPI.js"

function Index () {

    const story = useStoryblok("index", {version:"draft"})
    const [titles, setTitles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    console.log(story)
    useEffect(() => {
        const fetchTitles = async () => {

            const uuidsRaw = story?.content?.body?.[0]?.Title;

            const isReady = Array.isArray(uuidsRaw) && uuidsRaw.length > 0;

            if (!isReady || hasLoaded) return;

            const [draft] = await Promise.all([
                getDataByVersion(uuidsRaw,"draft"),
                getDataByVersion(uuidsRaw, "published"),


            ]);
            setTitles(draft);
            setHasLoaded(true);

        };
        fetchTitles();
    }, [story, hasLoaded]);

    if (!story.content?.body) return <p>Laden...</p>;

    console.log(titles)
    return (
        <>
            <GlobalStyle />
            <Header />

                <IndexWrapper>
                        {titles.map((t, index) => (
                            console.log(t),
                            <Wrapper key={index}>
                                <Link className="LinkClass" to={`/articles/${t.full?.slug}`}>{t.name}
                                <Imagehover src={t.full?.content.Header.filename} alt={t.full?.content.Header.alt} />
                                </Link>
                                <Tags>{t.tags.join(', ')}</Tags>
                            </Wrapper>


                                ))}


                </IndexWrapper>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    )
}

export default Index;