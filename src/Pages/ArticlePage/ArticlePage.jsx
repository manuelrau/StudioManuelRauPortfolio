import { useParams } from "react-router-dom";
import StoryblokClient from "storyblok-js-client";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/index.jsx";
import { GlobalStyle } from "../../styles.js";
import Footer from "../../Components/Footer/index.jsx";
import {getSlugArticle} from "../../Services/fetchingAPI.js";
import {Artikle} from "../styles.js";
import CarouselCompont from "../../Components/Article/CarouselCompont /index.jsx";
import { getArticlesWithTags } from "../../Services/fetchingAPI.js";
import HeaderImage from "../../Components/Article/HeaderImage";


const sb = new StoryblokClient({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
});

export default function ArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [notFound, setNotFound] = useState(false);


    useEffect(() => {
        const loadArticle = async () => {
            try {
                const story = await getSlugArticle(slug);
                setArticle(story);
            } catch (err) {
                setNotFound(true);
            }
        };
        loadArticle();
    }, [slug]);

    if (notFound) return <p>Artikel nicht gefunden</p>;
    if (!article) return <p>Lade Artikel...</p>;

    console.log(article);

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <HeaderImage story={article.content.Header}/>

            <h1>{article.name}</h1>

            <CarouselCompont/>
            <Footer/>
        </>
    )
}