import {Container, HoverInfo, ImageWrapper, LinkWrapper, VideoWrapper} from "./styles.js";
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import {useEffect, useRef, useState} from "react";
import {animate} from "motion";



const Images = ({ story , clickedTags = [] }) => {
    const photoData = story.content?.body[1]?.ImageData || [];
    const [visiblePhotos, setVisiblePhotos] = useState(photoData);
    const loaderRef = useRef(null)

    const [page, setPage] = useState(1);
    const itemsPerPage = 2;

    const currentPhotos = visiblePhotos.slice(0, page*itemsPerPage);
    const maxPage = Math.ceil(visiblePhotos.length / itemsPerPage);


    console.log('DATA', photoData, maxPage, visiblePhotos, itemsPerPage);
    useEffect(() => {
        if (photoData.length > 0) {
            setVisiblePhotos(photoData)
        }
    }, [photoData])

    useEffect(() => {
        if (photoData.length === 0) return;

        const filterPhotoData = clickedTags.length > 0 ? photoData.filter((photo) =>
            photo.Tags?.some((tag) => clickedTags.includes(tag))
        ) : photoData

        // IDs merken

        const newIDs = new Set(filterPhotoData.map(photo => photo._uid));
        const exiting = visiblePhotos.filter(photo => !newIDs.has(photo._uid));
        // Ausblenden & danach entfernen
        exiting.forEach(photo => {

            const el = document.getElementById(`photo-${photo._uid}`);
            if (el) {
                animate(el, { opacity: 0, y: 30 }, { duration: 0.4 }).finished.then(() => {
                    setVisiblePhotos(current =>
                        current.filter(p => p._uid !== photo._uid)
                    );})
            }
        })
        const added = filterPhotoData.filter(p => !visiblePhotos.find(v=>v._uid === p._uid))
        if(added.length > 0) {
            setVisiblePhotos(current => [...current, ...added])
        }

    }, [clickedTags]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && page < maxPage) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 1
            }
        );
        const currentLoader = loaderRef.current
        if (currentLoader) {
            observer.observe(currentLoader)
        }

        return () => {
            if (currentLoader) observer.unobserve(currentLoader)
        }

    }, [page, maxPage])


    return (

            <Container>

                {currentPhotos.map((photo, index) => (

                    <LinkWrapper key={photo._uid}>
                        <Link to={photo.link?.cached_url} className="LinkClass" >
                            <motion.div
                                id={`photo-${photo._uid}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: index * 0.2 }}
                            >
                                {photo.Image?.filename.endsWith('.mp4') ? (
                                        <VideoWrapper
                                            src={photo.Image.filename}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (

                                        <ImageWrapper src={photo.Image?.filename} alt={photo.Image?.alt || ''} />
                                    )}
                            <HoverInfo className="hover-info">
                                {photo.Name || "More"}
                            </HoverInfo>
                            </motion.div>
                        </Link>

                    </LinkWrapper>
                ))}
                {page < maxPage && (
                    <div ref={loaderRef} style={{ height: '1px' }}></div>
                )}
            </Container>


    )
}

export default Images;