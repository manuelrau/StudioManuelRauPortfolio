import { useState } from 'react'
import { storyblokInit, apiPlugin} from '@storyblok/react'
import './App.css'
import LandingPage from './Components/LandingPage/index.jsx'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Categories from "./Components/Categories/index.jsx";
import {GlobalStyle} from './styles.js'



storyblokInit({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
    use: [apiPlugin],
    components: {
        header: Header,
        footer: Footer,
    },
});

function App() {

  return (
    <>
        <GlobalStyle />
        <Header />
        <LandingPage />
        <Categories />
    </>
  )
}

export default App
