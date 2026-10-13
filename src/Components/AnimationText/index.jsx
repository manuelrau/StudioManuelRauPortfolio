import React, {useCallback, useEffect, useState} from 'react';
import { DynamicStyledText } from "./styles.js"
import useWindowSize from "../../Hook/useWindowSize.jsx";

const MOBILE_BREAKPOINT = 768;
const MOBILE_FONT_WEIGHT = 400;

const ScrollLetterSpacing = ({
        children, // Ermöglicht das Übergeben von Text als Kind-Element
        minFontWeight = 100,  // Font-Gewicht, wenn der Cursor ganz links im Fenster ist
        maxFontWeight = 700   // Font-Gewicht, wenn der Cursor ganz rechts im Fenster ist
    }) => {
        const { width: windowWidth } = useWindowSize();
        const isMobile = windowWidth !== undefined && windowWidth <= MOBILE_BREAKPOINT;
        const [currentFontWeight, setCurrentFontWeight] = useState(minFontWeight);

        const handleMouseMove = useCallback((event) => {
            const progress = Math.min(Math.max(event.clientX / window.innerWidth, 0), 1);
            setCurrentFontWeight(minFontWeight + progress * (maxFontWeight - minFontWeight));
        }, [minFontWeight, maxFontWeight]);

        useEffect(() => {
            if (isMobile) {
                return;
            }

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, [isMobile, handleMouseMove]);

    return (
        <DynamicStyledText
            currentFontWeight={isMobile ? MOBILE_FONT_WEIGHT : currentFontWeight}
        >
            {children || "Dieser Text zieht sich auseinander."}
        </DynamicStyledText>
    )
}

export default ScrollLetterSpacing