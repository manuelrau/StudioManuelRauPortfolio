
import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import LandingPage from '../../Components/LandingPage/index.jsx'
import Images from "../../Components/Images/index.jsx";
import {Helmet} from "react-helmet-async";
import {GlobalStyle, FooterContainer} from '../../styles.js'
import { StoryblokComponent, useStoryblok } from "@storyblok/react";
// Wrapp ist eigentlich ein Article/Text-Style, wird hier nur für das Layout wiederverwendet
import { Wrapp } from "../../Components/Article/Text/styles.js";

function Home() {
    const story = useStoryblok("home", { version: "draft" });

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
            <Wrapp>
                {story?.content?.Content?.map((blok) => (
                    <StoryblokComponent blok={blok} key={blok._uid} />
                ))}
            </Wrapp>

            {/* Fotogalerie liest aus story.content.body[1].ImageData */}
            <Images story={story}/>

            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </>
    )
}

export default Home;