import React, { useEffect, useRef } from 'react';
import Carousel from '../../Components/Carousel/index.jsx'
import {HeaderImage} from "./styles.js";

const MIN_SCALE = 0.85;
const MAX_SCALE = 1;
const DESKTOP_BREAKPOINT = 768;

function LandingPage({ story }) {
    const headerImageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const el = headerImageRef.current;
            if (!el) return;

            if (window.innerWidth <= DESKTOP_BREAKPOINT) {
                el.style.transform = '';
                return;
            }

            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = Math.abs(elementCenter - viewportCenter);
            const progress = 1 - Math.min(distance / viewportCenter, 1);
            const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress;

            el.style.transform = `scale(${scale})`;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    if (!story?.content) return <p>Laden...</p>;
    return(
            <>
                <div>
                    <HeaderImage ref={headerImageRef}>
                        <Carousel story={story} />
                    </HeaderImage>


                </div>
            </>
    )
}



export default LandingPage;