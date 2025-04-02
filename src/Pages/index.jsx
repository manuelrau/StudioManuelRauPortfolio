import { useEffect, useState } from 'react';
import {storyblokInit, useStoryblok} from "@storyblok/react";
import StoryblokClient  from "storyblok-js-client";
import Header from "../Components/Header/index.jsx"
import Footer from "../Components/Footer/index.jsx";
import { GlobalStyle } from "../styles.js";
import { Link } from 'react-router-dom';

const SbClient = new StoryblokClient ({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
})


function Index () {

    const story = useStoryblok("index", {version:"draft"})
    const [titles, setTitles] = useState([]);
    const [draftTitles, setDraftTitles] = useState([]);
    const [publishedTitles, setPublishedTitles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchTitles = async () => {

            const uuids = story?.content?.body?.[0].Title;

            if (!uuids || !Array.isArray(uuids) || hasLoaded) {
                return;
            }
            const getTitlesByVersion = async (version) => {
                const titlePromises = uuids.map(async (uuid) => {
                    try {
                        const res = await SbClient.get(`cdn/stories/${uuid}`, {
                            version,
                            find_by: "uuid",
                        });

                        return {
                            name: res.data.story.name,
                            full: res.data.story,
                        };
                    } catch (err) {
                        console.error(`Fehler bei UUID ${uuid} (${version}) :`, err);
                        return {
                            name: ` Fehler bei ${uuid}`,
                            full: null,
                };
                    }
                });
                const resolvedTitles = await Promise.all(titlePromises);
                setTitles(resolvedTitles);
            }
            const [draft, published] = await Promise.all([
                getTitlesByVersion("draft"),
                getTitlesByVersion("published"),
                setHasLoaded(true),
            ]);
            setPublishedTitles(published);
            setDraftTitles(draft);

        };
        fetchTitles();
    }, [story, hasLoaded]);

    if (!story.content?.body) return <p>Laden...</p>;
    console.log(titles)
    return (
        <>
            <GlobalStyle />
            <Header />

                {titles.map((t) => (
                    <Link to={`/artikel/${t.full?.slug}`}>{t.name}</Link>
                ))}

            <Footer />
        </>
    )
}

export default Index;