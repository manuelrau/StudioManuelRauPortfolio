import { storyblokInit, apiPlugin } from "@storyblok/react";
import ImageBlock from "../Components/Images/index.jsx";
import Carousel from "../Components/Carousel/index.jsx";
import Text from "../Components/Article/Text/index.jsx";
import Header from "../Components/Header/index.jsx";
import Footer from "../Components/Footer/index.jsx";
import About from "../Pages/About/About.jsx";
import Index from "../Pages/Index/index.jsx";
import Imprint from "../Pages/Imprint/Index.jsx";
import Tags from "../Components/Tags/index.jsx"

storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        image_block: ImageBlock,
        carousel: Carousel,
        Text: Text,
        "Information Block": () => null,
        header: Header,
        footer: Footer,
        about: About,
        index: Index,
        imprint: Imprint,
        Tags: Tags,
    },
});