import React from 'react';
import { Img } from "./styles.js";

const Image = ({story}) => {


    console.log('Test ob daten da sind', story);

    if (!Array.isArray(story)) {
        return <p>Keine Bilddaten vorhanden.</p>;
    }

    return (
        <>
            {story.map((s, i) => (
                s?.Image ? (
                    <Img
                        src={s.Image.filename}
                        alt={s.Image.alt || "Kein Alt-Text"}
                        key={i}
                    />
                    ) : (
                        <p key={i}>Kein Bild</p>
                )

                ))}

        </>

    )

}

export default Image

