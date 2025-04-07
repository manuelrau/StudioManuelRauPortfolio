import { useEffect, useState } from 'react';
import {storyblokInit, useStoryblok} from "@storyblok/react";
import Header from "../../Components/Header/index.jsx"
import Footer from "../../Components/Footer/index.jsx";
import { GlobalStyle } from "../../styles.js";
import { Link } from 'react-router-dom';
import {IndexWrapper, StyledLink} from "../styles.js";

import { getDataByVersion } from "../../Services/fetchingAPI.js"

function Index () {

    const story = useStoryblok("index", {version:"draft"})
    const [titles, setTitles] = useState([]);
    const [draftTitles, setDraftTitles] = useState([]);
    const [publishedTitles, setPublishedTitles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    console.log(story)
    useEffect(() => {
        const fetchTitles = async () => {

            const uuidsRaw = story?.content?.body?.[0]?.Title;

            const isReady = Array.isArray(uuidsRaw) && uuidsRaw.length > 0;

            if (!isReady || hasLoaded) return;

            const [draft, published] = await Promise.all([
                getDataByVersion(uuidsRaw,"draft"),
                getDataByVersion(uuidsRaw, "published"),


            ]);
            setTitles(draft);
            setHasLoaded(true);

        };
        fetchTitles();
    }, [story, hasLoaded]);

    if (!story.content?.body) return <p>Laden...</p>;

    return (
        <>
            <GlobalStyle />
            <Header />

                <IndexWrapper>
                        {titles.map((t) => (
                            <Link className="LinkClass" to={`/artikel/${t.full?.slug}`}>{t.name}</Link>

                                ))}


                </IndexWrapper>

            <Footer />
        </>
    )
}

export default Index;