import React from 'react';
import Header from '../../Components/Header/index.jsx'
import Footer from '../../Components/Footer/index.jsx'
import LandingPage from '../../Components/LandingPage/index.jsx'
import {GlobalStyle, FooterContainer} from '../../styles.js'

function Home() {

    return(
        <>
            <GlobalStyle />
            <Header />
            <LandingPage />
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    )
}

export default Home;