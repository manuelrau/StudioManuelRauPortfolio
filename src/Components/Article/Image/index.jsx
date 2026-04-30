import React, {useEffect, useRef} from 'react';
import {Img, ImageWrapper, Video, Wrapper, ParagraphStyle, FullSizeWrapper, RightWrapper, VerticalWrapper, WrapperComponentPackage} from "./styles.js";
import {animate, stagger} from "motion";


const Image = ({story}) => {
    const wrapperRefs = useRef([]);
    const videoRefs = useRef([]);

    useEffect(() => {
        const onScroll = () => {
            const viewportHeight = window.innerHeight;
            const startTrigger = viewportHeight * 0.9; // Effekt startet wenn Element 10% sichtbar
            const range = viewportHeight * 0.4;        // Effekt läuft über 40% des Viewports

            wrapperRefs.current.forEach((el, i) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const progress = Math.max(0, Math.min((startTrigger - rect.top) / range, 1));
                el.style.transform = `scale(${0.9 + 0.1 * progress})`; // Größe des videos
                el.style.transformOrigin = 'center center';

                const videoEl = videoRefs.current[i];
                if (videoEl) {
                    videoEl.style.borderRadius = `${Math.round(16 * progress)}px`;
                }
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!story || !story.Image?.filename) {
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
    }, [story]);

    console.log('Test ob daten da sind', story);

    if (!Array.isArray(story)) {
        return <p>Keine Bilddaten vorhanden.</p>;
    }
    return (
        <>
            <ImageWrapper className="container-animate">
                {story.map((s, i) => {

                    console.log(s);
                    const filename = s?.Image?.filename;
                    const isFullSize = s?.Fullsize;
                    const isRight = s?.right;
                    const isVertical = s?.vertical;

                    if(!filename) {
                        return <p key={i}>Kein Bild</p>
                    }

                    const isImage = /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(filename);
                    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(filename);

                    const WrapperComponent = isFullSize ? FullSizeWrapper : isRight ? RightWrapper : (isVertical ? VerticalWrapper : Wrapper);
                    console.log('DATA:', s)

                    if (isImage) {
                        return (
                            <WrapperComponent>
                                <WrapperComponentPackage>


                                <Img
                                    src={s.Image.filename}
                                    alt={s.Image.alt || "No Alt-text"}
                                    key={i}
                                />
                                <ParagraphStyle>{s?.Text ||" "}</ParagraphStyle>
                                </WrapperComponentPackage>
                            </WrapperComponent>
                        );
                    }
                        else if(isVideo) {
                        return (
                            <WrapperComponent ref={el => wrapperRefs.current[i] = el}>
                                <Video
                                    key={i}
                                    ref={el => videoRefs.current[i] = el}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    src={filename}
                                    style={{maxWidth: "100%"}}
                                >
                                    Dein Browser unterstützt das Video-Tag nicht.
                                </Video>

                                <ParagraphStyle>{s?.Text ||" "}</ParagraphStyle>

                            </WrapperComponent>

                        );

                    } else {
                        return <p key={i}>unbekanntes Format </p>

                    }
                })}
            </ImageWrapper>

        </>

    )

}

export default Image

