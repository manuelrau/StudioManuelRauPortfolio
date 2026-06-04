
import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import Categories from "../../Components/Categories/index.jsx";
import LandingPage from '../../Components/LandingPage/index.jsx'
import {Helmet} from "react-helmet-async";
import {GlobalStyle, FooterContainer} from '../../styles.js'



function Home() {

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
            <LandingPage/>
            <Categories/>

            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </>
    )
}

export default Home;