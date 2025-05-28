import React, {useEffect} from 'react';
import {Img, ImageWrapper, Video, Wrapper, ParagraphStyle, FullSizeWrapper, RightWrapper, VerticalWrapper} from "./styles.js";
import {animate, stagger} from "motion";


const Image = ({story}) => {
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
                    console.log(WrapperComponent)

                    if (isImage) {
                        return (
                            <WrapperComponent>
                                <Img
                                    src={s.Image.filename}
                                    alt={s.Image.alt || "Kein Alt-Text"}
                                    key={i}
                                />
                                <ParagraphStyle>{s?.Image?.name}</ParagraphStyle>
                            </WrapperComponent>
                        );
                    }
                        else if(isVideo) {
                        return (
                            <WrapperComponent>
                                <Video
                                    key={i}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    src={filename}
                                    style={{maxWidth: "100%"}}
                                >
                                    Dein Browser unterstützt das Video-Tag nicht.
                                </Video>

                                <ParagraphStyle>{s?.Image?.name}</ParagraphStyle>

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

