import {Container, HoverInfo, ImageWrapper, LinkWrapper} from "./styles.js";
import { Link } from 'react-router-dom';


const Images = ({ story , clickedTags = [] }) => {

    const photoData = story.content?.body[1]?.ImageData || [];

    console.log(photoData);

    const filterPhotoData = clickedTags.length > 0 ? photoData.filter((photo) =>
    photo.Tags?.some((tag) => clickedTags.includes(tag))
    ) : photoData

    return (
        <>
            <Container>

                {filterPhotoData.map((photo, index) => (

                    <LinkWrapper key={index}>
                        <Link to={photo.link?.cached_url} className="LinkClass" >
                            <ImageWrapper src={photo.Image?.filename} alt={photo.Image?.alt || ''} />
                            <HoverInfo className="hover-info">
                                {photo.Name || "More"}
                            </HoverInfo>
                        </Link>

                    </LinkWrapper>
                ))}
            </Container>

        </>
    )
}

export default Images;