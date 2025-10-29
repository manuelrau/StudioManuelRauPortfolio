import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../../Components/Header/index.jsx";
import { GlobalStyle, FooterContainer } from "../../styles.js";
import Footer from "../../Components/Footer/index.jsx";
import {fetchArticlePageRandom, getImagesofArticle, getSlugArticle} from "../../Services/fetchingAPI.js";
import CarouselCompont from "../../Components/Article/CarouselCompont /index.jsx";
import HeaderImage from "../../Components/Article/HeaderImage";
import Text from "../../Components/Article/Text/index.jsx";
import { Wrapper} from "./styles.js";
import RelatedArticle from "../../Components/Article/Related/index.jsx";
import ScrollLetterSpacing from "../../Components/AnimationText/index.jsx"
import {useStoryblok} from "@storyblok/react";
import Images from "../../Components/Article/Image/index.jsx";
import {useStoryblokfetch} from "../../Hook/useStoryblokfetch.jsx";



export default function ArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [notFound, setNotFound] = useState(false);



    const [titles, setTitles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    //const story = useStoryblok("index", {version:"draft"})

    const { lang } = useParams(); // Sprache aus der URL holen
    const activeLang = lang === "de" ? "de-de" : (lang || "en"); // Englisch als Fallback
    const combinedSlug = `articles/${slug || ''}`; //zusätzlich zum articles pfad wird der der pfad zum articel benötigtt
    const { story, loading, error } = useStoryblokfetch(combinedSlug , activeLang); //hier wird alles der  hook übergeben

    const [imageData, setImageData] = useState(null);

    //--Data for "Other Projects--
    const OterArticle = useStoryblok("index", {version:"published"})


    useEffect(() => {
        const loadArticle = async () => {
            try {
                const content = story;
                setArticle(content);


            } catch (err) {
                setNotFound(true);
            }
        };
        loadArticle();
    }, [story]);

    //-- Data for Other Article --
    useEffect(() => {
        const fetchTitles = async () => {

            const uuidsRaw = OterArticle?.content?.body?.[0]?.Title;



            const isReady = Array.isArray(uuidsRaw) && uuidsRaw.length > 0;

            if (!isReady || hasLoaded) return;

            const [draft] = await Promise.all([
                //fetchArticlePageRandom(uuidsRaw,"draft"),
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





    if (notFound) return <p>Article not found</p>;
    if (!article) return <p>Loading article...</p>;

    if (loading) return <p>Laden...</p>;
    if (error) return <p>Fehler: {error.message}</p>;
    if (!story?.content) return <p>Kein Inhalt gefunden.</p>;


    console.log("Article:", article.content?.Link);
    console.log(setTitles);
    console.log('AllData----->:', article)


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


                <Text story = {article?.content?.Text}
                      links = {article.content?.Link}
                      icon = {article.content?.Icon}

                      Client={article?.content?.info[0]?.Client}
                      Services={article?.content?.info[0]?.Services}
                      Industire={article?.content?.info[0]}
                />

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