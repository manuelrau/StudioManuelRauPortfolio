import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { loadTheme } from "./lib/loadtheme";
import './index.css'
import router from './router'

// Bausteine für das body-Feld
import Image from "./Components/Article/Image/index.jsx"
import HeaderImage from "./Components/Article/HeaderImage/index.jsx";
import ImageBlock from "./Components/Images/index.jsx";
import Carousel from "./Components/Carousel/index.jsx";
import Text from "./Components/Article/Text/index.jsx";
import RelatedArticle from "./Components/Article/Related/index.jsx";

storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {

        image_block: ImageBlock,
        image: Image,
        header_image: HeaderImage,
        related_article: RelatedArticle,

        text: Text,

        carousel: Carousel,
    },
});

loadTheme().finally(() => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>

        </StrictMode>,
    )
})