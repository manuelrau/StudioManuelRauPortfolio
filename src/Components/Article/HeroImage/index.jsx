import React, { useEffect } from 'react';
import { Wrapper, Img } from "./styles.js";
import { animate, stagger } from "motion";

const HeroImage = ({ blok }) => {
    const filename = blok?.Image?.filename;

    useEffect(() => {
        if (!filename) {
            return;
        }
        animate(
            ".hero-image-animate",
            { opacity: [0, 1], y: [50, 0] },
            {
                delay: stagger(0.1),
                duration: 1.0,
                easing: "ease-in"
            }
        );
    }, [filename]);

    if (!filename) {
        return null;
    }

    return (
        <Wrapper className="hero-image-animate">
            <Img src={filename} alt={blok?.Image?.alt || "No Alt-text"} />
        </Wrapper>
    );
};

export default HeroImage;