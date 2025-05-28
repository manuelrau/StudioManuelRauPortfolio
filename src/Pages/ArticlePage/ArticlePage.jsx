import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/index.jsx";
import { GlobalStyle } from "../../styles.js";
import Footer from "../../Components/Footer/index.jsx";
import {fetchArticlePageRandom, getImagesofArticle, getSlugArticle} from "../../Services/fetchingAPI.js";
import CarouselCompont from "../../Components/Article/CarouselCompont /index.jsx";
import HeaderImage from "../../Components/Article/HeaderImage";
import Text from "../../Components/Article/Text/index.jsx";
import {HeadlineThree, Wrapper, WrapperTags} from "./styles.js";
import RelatedArticle from "../../Components/Article/Related/index.jsx";
import ScrollLetterSpacing from "../../Components/AnimationText/index.jsx"
import {useStoryblok} from "@storyblok/react";
import Images from "../../Components/Article/Image/index.jsx";
import {animate, stagger} from "motion";



export default function ArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const story = useStoryblok("index", {version:"draft"})
    const [titles, setTitles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    const [imageData, setImageData] = useState(null);


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

    useEffect(() => {
        const loadImages = async () => {

            if (!article) return; // Sicherheitscheck

            const Data = article.content
            console.log(Data)
            try {
                const Imageload = await getImagesofArticle(Data)
                console.log('ImagesLoad was kommt an', Imageload)
                setImageData(Imageload);
            }catch (err) {
                setNotFound(true);
            }

        };
        loadImages();
    }, [article]);



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
                <ScrollLetterSpacing
                    scrollStartEffect={100}  // Beginnt etwas später
                    scrollEndEffect={800}    // Effekt dauert länger an
                    minLetterSpacing={0.5}   // Kleiner Startabstand
                    maxLetterSpacing={20}    // Größerer maximaler Abstand
                    >
                    {article.content.Headline}
                </ScrollLetterSpacing>
                <WrapperTags>
                    {article.tag_list?.map((tag, index) => (
                        <HeadlineThree key={index}>{tag}</HeadlineThree>
                    ))}
                </WrapperTags>


                <Text story={article.content.Text}/>

                <CarouselCompont/>

                <Images story={imageData}/>

                <RelatedArticle story={titles}/>

            </Wrapper>
            <Footer/>
        </>
    )
}