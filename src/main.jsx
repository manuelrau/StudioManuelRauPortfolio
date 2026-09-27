import { StrictMode } from 'react'
import { loadTheme } from "./lib/loadtheme";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './router'

import Text from "./Components/Article/Text/index.jsx";
import HeaderImage from "./Components/Article/HeaderImage";
import Images from "./Components/Article/Image/index.jsx";
import RelatedArticle from "./Components/Article/Related/index.jsx";
import CarouselCompont from "./Components/Article/CarouselCompont /index.jsx";
import ScrollLetterSpacing from "./Components/AnimationText/index.jsx"

storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        text: Text,
        LetterSpacing: ScrollLetterSpacing,
        headerImage: HeaderImage,
        image_block: Images,
        carousel: CarouselCompont,
        relstedArticle: RelatedArticle,
    },
});


loadTheme().finally(() => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    )
})
