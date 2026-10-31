import React from 'react';
import { GlobalStyle} from "../../styles.js";
import {Frame} from "./styles.js";
import Header from "../../Components/Header/index.jsx";
import Footer from "../../Components/Footer/index.jsx";

// Wird vom Router als errorElement für unbekannte Routen angezeigt (siehe router.jsx)
function NotFoundPage() {
    return(
        <>
            <Header />
            <GlobalStyle />
            <Frame>
                <h1>Something went wrong :(</h1>
            </Frame>
            <Footer />
        </>
    )
}

export default NotFoundPage;