import { storyblokInit, apiPlugin} from '@storyblok/react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About/About.jsx'
import Index from './Pages/Index/index.jsx'
import Imprint from './Pages/Imprint/index.jsx'
import {HelmetProvider} from "react-helmet-async";



storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        header: Header,
        footer: Footer,
        about: About,
        index: Index,
        imprint: Imprint
    },
});

function App() {

  return (
    <>
        <HelmetProvider>
            <Outlet />
        </HelmetProvider>

    </>
  )
}

export default App
