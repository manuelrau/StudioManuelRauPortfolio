import {Container, ImageWrapper} from "./styles.js";


const Images = ({ story , clickedTags }) => {
    const photos = story.content.body[1]?.Images || [];
    console.log(photos);

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
            </Container>

        </>
    )
}

export default Images;