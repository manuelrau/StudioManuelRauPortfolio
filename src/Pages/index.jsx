import React from 'react';
import { useStoryblok } from "@storyblok/react";
import Header from "../Components/Header/index.jsx"
import Footer from "../Components/Footer/index.jsx";
import { GlobalStyle } from "../styles.js";


function Index () {

    const story = useStoryblok("index", {version:"draft"})
    console.log(story)
    if (!story.content) return <p>Laden...</p>;
    return (
        <>
            <GlobalStyle />
            <Header />
            <Footer />
        </>
    )
}

export default Index;