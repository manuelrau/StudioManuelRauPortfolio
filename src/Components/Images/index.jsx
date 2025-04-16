import {Container, ImageWrapper} from "./styles.js";
import { Link } from 'react-router-dom';


const Images = ({ story , clickedTags }) => {
    const photos = story.content.body[1]?.Images || [];

    const photoData = story.content.body[1]?.ImageData || [];
    console.log(photos);
    console.log(photoData);

    const filterPhots = clickedTags.length > 0 ? photos.filter((photo) =>

    photo.tags?.some((tag) => clickedTags.includes(tag))
    ) : photos

    return (
        <>
            <Container>
                {filterPhots.map((photo, index) => (
                    <div key={index}>
                        <ImageWrapper src={photo.filename} alt={photo.alt} />
                    </div>


                ))}

                {photoData.map((photo, index) => (

                    <div key={index}>
                        <Link to={photo.link?.cached_url} >
                            <ImageWrapper src={photo.Image?.filename} alt={photo.Image?.alt || ''} />
                        </Link>

                    </div>
                ))}
            </Container>

        </>
    )
}

export default Images;