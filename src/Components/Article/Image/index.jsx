import React from 'react';
import {Img, ImageWrapper, Video, Wrapper, ParagraphStyle, FullSizeWrapper} from "./styles.js";

const Image = ({story}) => {


    console.log('Test ob daten da sind', story);

    if (!Array.isArray(story)) {
        return <p>Keine Bilddaten vorhanden.</p>;
    }

    return (
        <>
            <ImageWrapper>
                {story.map((s, i) => {

                    console.log(s);
                    const filename = s?.Image?.filename;
                    const isFullSize = s?.Fullsize;

                    if(!filename) {
                        return <p key={i}>Kein Bild</p>
                    }

                    const isImage = /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(filename);
                    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(filename);

                    const WrapperComponent = isFullSize ? FullSizeWrapper : Wrapper;
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

                                <ParagraphStyle>{s?.Image?.alt}</ParagraphStyle>

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

