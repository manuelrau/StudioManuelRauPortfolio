import React, {useEffect} from 'react';
import {
    TextStyle,
    Wrapper,
    TextWrapper,
} from "./styles.js";
import {animate, stagger} from "motion";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {

    const richText = blok?.InfoText;

    useEffect(() => {
        if (!richText?.content?.length) return;
        animate(
            ".container-animate",
            { opacity: [0, 1], y: [50, 0] },
            {
                delay: stagger(0.1),
                duration: 1.0,
                easing: "ease-in"
            }
        );
    }, [richText]);

    return(
        <TextWrapper>
            <Wrapper className="container-animate">
                <TextStyle>{render(richText)}</TextStyle>
            </Wrapper>
        </TextWrapper>
    )
}

export default Text;