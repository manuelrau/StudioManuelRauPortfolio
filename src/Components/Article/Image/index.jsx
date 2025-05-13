import React from 'react';
import {Img, ImageWrapper, Video, Wrapper, sub} from "./styles.js";

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

                    if(!filename) {
                        return <p key={i}>Kein Bild</p>
                    }

                    const isImage = /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(filename);
                    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(filename);

                    if (isImage) {
                        return (
                            <Wrapper>
                                <Img
                                    src={s.Image.filename}
                                    alt={s.Image.alt || "Kein Alt-Text"}
                                    key={i}
                                />
                                <sub>{s?.Image?.alt}</sub>
                            </Wrapper>
                        );
                    }
                        else if(isVideo) {
                        return (
                            <Wrapper>
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

                                <sub>{s?.Image?.alt}</sub>

                            </Wrapper>

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

