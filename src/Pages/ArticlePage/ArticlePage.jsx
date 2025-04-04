import { useParams } from "react-router-dom";
import StoryblokClient from "storyblok-js-client";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/index.jsx";
import { GlobalStyle } from "../../styles.js";
import Footer from "../../Components/Footer/index.jsx";
import {Artikle} from "../styles.js";


const sb = new StoryblokClient({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
});

export default function ArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await sb.get (`cdn/stories/articles/${slug}`, {
                    version: "draft",
                });
                setArticle(res.data.story);
            } catch (err) {
                console.error("Artikel nicht gefunden:",err)
                setNotFound(true);
            }
        }
        fetchArticle();
    }, [slug])
    if (notFound) return <p>Artikel nicht gefunden </p>;
    if (!article) return <p>Lade Artikel...</p>;
    console.log(article);
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <img src={article.content.Header.filename} height="550px"/>
            <h1>{article.name}</h1>
            <Artikle>{article.content.Text.content[0].content[0].text} </Artikle>
            <Footer/>
        </>
    )
}