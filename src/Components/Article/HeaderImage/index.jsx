import React, {useEffect} from 'react';
import { Wrapper, ImageDefinition } from './styles.js'
import {animate, stagger} from "motion";

const HeaderImage = (story) => {

    const rawData = story.story;
    console.log('rawData', rawData);

    useEffect(() => {
        if (!rawData || !rawData?.filename) {
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
                <ImageDefinition src={rawData.filename} alt={rawData.alt}/>
            </Wrapper>
        </>
    )
}

export default HeaderImage