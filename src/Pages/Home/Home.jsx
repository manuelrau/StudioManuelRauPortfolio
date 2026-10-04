
import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import Categories from "../../Components/Categories/index.jsx";
import LandingPage from '../../Components/LandingPage/index.jsx'
import {Helmet} from "react-helmet-async";
import {GlobalStyle, FooterContainer} from '../../styles.js'
import { StoryblokComponent, useStoryblok } from "@storyblok/react";



function Home() {
    const story = useStoryblok("home", { version: "draft" });
    console.log("Home story:", story);

    return(
        <>
            <GlobalStyle />
            <Helmet>
                <title>Studio Manuel Rau – UX/UI & Motion Design | Freelance Designer</title>
                <meta name="description"
                      content="Manuel Rau – Freelance UX/UI & Motion Designer aus Deutschland. Branding, App-Design und Motion Concepts für Agenturen und Startups."
                />
            </Helmet>
            <Header/>
            <LandingPage story={story}/>
            <Categories/>

            {story?.content?.Content?.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}

            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </>
    )
}

export default Home;