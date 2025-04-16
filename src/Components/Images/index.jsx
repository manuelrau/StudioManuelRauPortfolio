import {Container, ImageWrapper} from "./styles.js";
import { Link } from 'react-router-dom';


const Images = ({ story , clickedTags }) => {

    const photoData = story.content.body[1]?.ImageData || [];

    console.log(photoData);

    const filterPhotoData = clickedTags.length > 0 ? photoData.filter((photo) =>
    photo.Tags?.some((tag) => clickedTags.includes(tag))
    ) : photoData

    return (
        <>
            <Container>

                {filterPhotoData.map((photo, index) => (

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