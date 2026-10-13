import React from 'react';
import { Wrapper, Img } from "./styles.js";

const HeroImage = ({ blok }) => {
    const filename = blok?.Image?.filename;

    if (!filename) {
        return null;
    }

    return (
        <Wrapper>
            <Img src={filename} alt={blok?.Image?.alt || "No Alt-text"} />
        </Wrapper>
    );
};

export default HeroImage;