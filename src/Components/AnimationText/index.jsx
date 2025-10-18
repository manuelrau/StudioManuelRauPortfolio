import React, {useCallback, useState} from 'react';
import {useEffect} from "react";
import { DynamicStyledText } from "./styles.js"



const ScrollLetterSpacing = ({
        children, // Ermöglicht das Übergeben von Text als Kind-Element
        scrollStartEffect = 0,   // Scroll-Position (Pixel), ab der der Effekt beginnt
        scrollEndEffect = 400,   // Scroll-Position, bei der der maximale Abstand erreicht ist
        minFontWeight = 100,    // Minimaler Buchstabenabstand in Pixeln
        maxFontWeight = 800    // Maximaler Buchstabenabstand in Pixeln
    }) => {
        const [currentFontWeight, setCurrentFontWeight] = useState(minFontWeight);

        const handleScroll = useCallback(() => {
            const scrollY = window.scrollY;
            let newFontWeight;

            if(scrollY <= scrollStartEffect) {
                newFontWeight = minFontWeight;
            } else if (scrollY >= scrollEndEffect) {
                newFontWeight = maxFontWeight;
            } else {
                // Berechnen von Werten zwischen im bereich zwischen 0 und 1
                const progress = (scrollY - scrollStartEffect) / (scrollEndEffect - scrollStartEffect );
                newFontWeight = minFontWeight + progress * (maxFontWeight - minFontWeight);
            }
            // aktualisiere den State
            setCurrentFontWeight(newFontWeight);
        }, [scrollStartEffect, scrollEndEffect, minFontWeight, maxFontWeight])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll]);

    return (
        <>
            <DynamicStyledText currentFontWeight={currentFontWeight}>
                {children || "Dieser Text zieht sich auseinander."}
            </DynamicStyledText>
        </>
    )
}

export default ScrollLetterSpacing