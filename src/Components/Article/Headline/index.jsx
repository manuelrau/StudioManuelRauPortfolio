import React from 'react';
import { Wrapper } from "./styles.js";
import ScrollLetterSpacing from "../../AnimationText/index.jsx";

const Headline = ({ blok }) => {
    if (!blok?.Headline) {
        return null;
    }

    return (
        <Wrapper>
            <ScrollLetterSpacing
                minFontWeight={100}
                maxFontWeight={700}
            >
                {blok.Headline}
            </ScrollLetterSpacing>
        </Wrapper>
    );
};

export default Headline;