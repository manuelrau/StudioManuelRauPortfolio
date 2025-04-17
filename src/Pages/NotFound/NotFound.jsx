import React from 'react';
import { useRouteError } from "react-router-dom";
import { GlobalStyle} from "../../styles.js";
import Header from "../../Components/Header/index.jsx";
import Footer from "../../Components/Footer/index.jsx";

function NotFoundPage() {
    const error = useRouteError();
    console.log(error);
    return(
        <>
            <Header />
            <GlobalStyle />
            <h1>Da ist etwas schief gelaufen </h1>
            <p>Leider konnten wir die Seite nicht finden</p>
            <pre>{error.statusText ||error.message}</pre>
            <Footer />
        </>
    )
}

export default NotFoundPage;