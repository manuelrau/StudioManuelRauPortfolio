import { storyblokInit, apiPlugin } from "@storyblok/react";
import ImageBlock from "../Components/Images/index.jsx";
import Carousel from "../Components/Carousel/index.jsx";

storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        image_block: ImageBlock,
        carousel: Carousel,
    },
});