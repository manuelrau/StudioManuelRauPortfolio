import { useState } from 'react'
import { storyblokInit, apiPlugin} from '@storyblok/react'
import './App.css'
import LandingPage from './Components/LandingPage/index.jsx'
import Header from './Components/Header'
import {GlobalStyle} from './styles.js'

const components = {};

storyblokInit({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
    use: [apiPlugin],
    components,
});

function App() {

  return (
    <>
        <GlobalStyle />
        <Header />
        <LandingPage />
    </>
  )
}

export default App
