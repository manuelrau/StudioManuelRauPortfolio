import {Column, Container, HoverInfo, ImageWrapper, LinkWrapper, VideoWrapper} from "./styles.js";
import { Link } from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion"
import useWindowSize from "../../Hook/useWindowSize.jsx";




const Images = ({ story }) => {
    const photoData = story.content?.body[1]?.ImageData || [];
    const loaderRef = useRef(null)

    const [page, setPage] = useState(1);
    const itemsPerPage = 6; // wie viele elemente sollen immer nachgeladen werden

    const maxPage = Math.ceil(photoData.length / itemsPerPage);
    const visiblePhotos = photoData.slice(0, page * itemsPerPage);

    const { width } = useWindowSize();
    const columnCount = !width || width > 1024 ? 4 : width > 480 ? 2 : 1;
    const columns = Array.from({ length: columnCount }, () => []);
    visiblePhotos.forEach((photo, index) => {
        columns[index % columnCount].push({ photo, index });
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && page < maxPage) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 1 // wie viel viewport sich bewegen muss damit es nachlädt
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
        <>
            <Container>

                {columns.map((columnItems, columnIndex) => (
                    <Column key={columnIndex}>
                        {columnItems.map(({ photo, index }) => (

                            <LinkWrapper key={photo._uid}>
                                <Link to={photo.link?.cached_url} className="LinkClass" >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: index * 0.1 }}
                                    >
                                        {photo.Image?.filename.endsWith('.mp4') ? (
                                                <VideoWrapper
                                                    src={photo.Image?.filename}
                                                    alt={photo.Image?.alt || 'no information'}
                                                    title={photo.Image?.title || 'no information'}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            ) : (

                                                <ImageWrapper src={photo.Image?.filename} alt={photo.Image?.alt || 'no information'} title={photo.Image?.title || 'no information'}/>
                                            )}
                                    <HoverInfo className="hover-info">
                                        {photo.Name || "More"}
                                    </HoverInfo>
                                    </motion.div>
                                </Link>

                            </LinkWrapper>
                        ))}
                    </Column>
                ))}
            </Container>
            {page < maxPage && (
                <div ref={loaderRef} style={{ height: '1px' }}></div>
            )}
        </>
    )
}

export default Images;