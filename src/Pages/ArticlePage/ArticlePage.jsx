import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/index.jsx";
import { GlobalStyle } from "../../styles.js";
import Footer from "../../Components/Footer/index.jsx";
import {getSlugArticle} from "../../Services/fetchingAPI.js";
import CarouselCompont from "../../Components/Article/CarouselCompont /index.jsx";
import HeaderImage from "../../Components/Article/HeaderImage";
import Text from "../../Components/Article/Text/index.jsx";
import {HeadlineThree, Wrapper, WrapperTags} from "./styles.js";
import RelatedArticle from "../../Components/Article/Related/index.jsx";



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
                <RelatedArticle story={article} />
            </Wrapper>
            <Footer/>
        </>
    )
}