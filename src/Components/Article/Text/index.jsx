import React, {useEffect} from 'react';
import {paragraphText, Wrapper} from "./styles.js";
import {animate, stagger} from "motion";

const Text = ( story ) => {

    const rawData = story.story.content[0].content[0]

    console.log('rawTextData', rawData)

    useEffect(() => {
        if (!rawData || !rawData.text) {
            return; // Frühzeitiger Ausstieg, wenn keine Daten vorhanden sind
        }
        animate(
            ".container-animate",
            { opacity: [0, 1], y: [50, 0] },
            {
                delay: stagger(0.1),
                duration: 1.0,
                easing: "ease-in"
            }
        );
    }, [rawData]);


    return(
        <>
            <Wrapper className="container-animate">
                <paragraphText>{rawData.text}</paragraphText>
            </Wrapper>
        </>
    )
}

export default Text;