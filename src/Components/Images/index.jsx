import react from "react";
import {Container, ImageWrapper} from "./styles.js";

const Images = ({ story }) => {

    const photos = story.content.body[1]?.Images || [];

    console.log(photos);

    return (
        <>
            <Container>
                {photos.map((photo, index) => (
                    <div key={index}>
                        <ImageWrapper src={photo.filename} alt={photo.alt} />
                    </div>


                ))}
            </Container>

        </>
    )
}

export default Images;