import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/index.jsx";
import { GlobalStyle } from "../../styles.js";
import Footer from "../../Components/Footer/index.jsx";
import {fetchArticlePageRandom, getDataByVersion, getSlugArticle} from "../../Services/fetchingAPI.js";
import CarouselCompont from "../../Components/Article/CarouselCompont /index.jsx";
import HeaderImage from "../../Components/Article/HeaderImage";
import Text from "../../Components/Article/Text/index.jsx";
import {HeadlineThree, Wrapper, WrapperTags} from "./styles.js";
import RelatedArticle from "../../Components/Article/Related/index.jsx";
import {useStoryblok} from "@storyblok/react";



export default function ArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const story = useStoryblok("index", {version:"draft"})
    const [titles, setTitles] = useState([]);
    const [element, setElement] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    console.log(story)


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

    useEffect(() => {
        const fetchTitles = async () => {

            const uuidsRaw = story?.content?.body?.[0]?.Title;

            const isReady = Array.isArray(uuidsRaw) && uuidsRaw.length > 0;

            if (!isReady || hasLoaded) return;

            const [draft] = await Promise.all([
                fetchArticlePageRandom(uuidsRaw,"draft"),
                fetchArticlePageRandom(uuidsRaw, "published"),


            ]);
            setTitles(draft);
            setHasLoaded(true);

        };
        fetchTitles();
    }, [story, hasLoaded]);

    if (notFound) return <p>Artikel nicht gefunden</p>;
    if (!article) return <p>Lade Artikel...</p>;

    console.log(article);
    console.log(setTitles);


    return (
        <>
            <GlobalStyle/>
            <Header/>
            <HeaderImage story={article.content?.Header}/>
            <Wrapper>
                <h1>{article.content.Headline}</h1>
                <WrapperTags>
                    {article.tag_list?.map((tag, index) => (
                        <HeadlineThree key={index}>{tag}</HeadlineThree>
                    ))}
                </WrapperTags>


                <Text story={article.content.Text}/>

                <CarouselCompont/>

                <RelatedArticle story={titles} />

            </Wrapper>
            <Footer/>
        </>
    )
}