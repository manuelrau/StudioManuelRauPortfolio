import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { loadTheme } from "./lib/loadtheme";
import './index.css'
import router from './router'

// Bausteine für das body-Feld

import ImageBlock from "./Components/Images/index.jsx";

import Carousel from "./Components/Carousel/index.jsx";

storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {

        image_block: ImageBlock,

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