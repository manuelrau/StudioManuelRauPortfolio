import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LandingPage from '../Components/LandingPage/index.jsx'
import {GlobalStyle, FooterContainer} from '../styles.js'

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