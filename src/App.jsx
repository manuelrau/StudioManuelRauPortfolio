import { useState } from 'react'
import { storyblokInit, apiPlugin} from '@storyblok/react'
import './App.css'
import LandingPage from './Components/LandingPage/index.jsx'

const components = {};

storyblokInit({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
    use: [apiPlugin],
    components,
});

function App() {

  return (
    <>
        <LandingPage />
    </>
  )
}

export default App
