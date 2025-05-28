import React, {useCallback, useState} from 'react';
import {useEffect} from "react";
import { DynamicStyledText } from "./styles.js"



const ScrollLetterSpacing = ({
        children, // Ermöglicht das Übergeben von Text als Kind-Element
        scrollStartEffect = 0,   // Scroll-Position (Pixel), ab der der Effekt beginnt
        scrollEndEffect = 500,   // Scroll-Position, bei der der maximale Abstand erreicht ist
        minLetterSpacing = 0,    // Minimaler Buchstabenabstand in Pixeln
        maxLetterSpacing = 20    // Maximaler Buchstabenabstand in Pixeln
    }) => {
        const [currentLetterspacing, setCurrentLetterspacing] = useState(minLetterSpacing);

        const handleScroll = useCallback(() => {
            const scrollY = window.scrollY;
            let newLetterSpacing;

            if(scrollY <= scrollStartEffect) {
                newLetterSpacing = minLetterSpacing;
            } else if (scrollY >= scrollEndEffect) {
                newLetterSpacing = maxLetterSpacing;
            } else {
                // Berechnen von Werten zwischen im bereich zwischen 0 und 1
                const progress = (scrollY - scrollStartEffect) / (scrollEndEffect - scrollStartEffect );
                newLetterSpacing = minLetterSpacing + progress * (maxLetterSpacing - minLetterSpacing);
            }
            // aktualisiere den State
            setCurrentLetterspacing(newLetterSpacing);
        }, [scrollStartEffect, scrollEndEffect, minLetterSpacing, maxLetterSpacing])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll]);

    return (
        <>
            <DynamicStyledText currentLetterSpacing={currentLetterspacing}>
                {children || "Dieser Text zieht sich auseinander."}
            </DynamicStyledText>
        </>
    )
}

export default ScrollLetterSpacing