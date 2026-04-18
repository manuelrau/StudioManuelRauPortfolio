import React, { useEffect, useState } from 'react';
import { useStoryblok} from "@storyblok/react";
import Header from "../../Components/Header/index.jsx"
import Footer from "../../Components/Footer/index.jsx";
import {FooterContainer, GlobalStyle} from "../../styles.js";
import {Link, useParams} from 'react-router-dom';
import {Tags, Wrapper, IndexWrapper, Imagehover, SkeletonLine} from "./styles.js"

import { getDataByVersion } from "../../Services/fetchingAPI.js"
import {useStoryblokfetch} from "../../Hook/useStoryblokfetch.jsx";

function Index () {

    // Sprache
    const { lang } = useParams();
    const activeLang = lang === "de" ? "de-de" : (lang || "en");
    const { story, loading, error } = useStoryblokfetch("index", activeLang);

    const [titles, setTitles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchTitles = async () => {
            const uuidsRaw = story?.content?.body?.[0]?.Title;
            const isReady = Array.isArray(uuidsRaw) && uuidsRaw.length > 0;
            if (!isReady || hasLoaded) return;

            const results = await getDataByVersion(uuidsRaw, "published");
            setTitles(results);
            setHasLoaded(true);
        };
        fetchTitles();
    }, [story, hasLoaded]);

    if (error) return <p>Fehler: {error.message}</p>;

    const isReady = !loading && titles.length > 0;

    return (
        <>
            <GlobalStyle />
            <Header />
            <IndexWrapper>
                {isReady
                    ? titles.map((t, index) => (
                        <Wrapper key={index}>
                            <Link className="LinkClass" to={`/${lang}/articles/${t.slug.split('/').pop()}`}>
                                {t.name}
                            </Link>
                            <Imagehover className="ImageHover" src={t.img} alt="" />
                            <Tags>{t.tags.join(', ')}</Tags>
                        </Wrapper>
                    ))
                    : Array.from({ length: 6 }).map((_, i) => (
                        <Wrapper key={i}>
                            <SkeletonLine />
                        </Wrapper>
                    ))
                }
            </IndexWrapper>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    )
}

export default Index;