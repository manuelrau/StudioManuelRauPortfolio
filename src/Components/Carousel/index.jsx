import React, {useEffect, useState, useRef} from "react";
import { Link } from 'react-router-dom';
import {
    EmblaSlide,
    EmblaContainer,
    Embla,
    EmblaViewport,
    ImagesContainer,
    VideoContainer
} from "./styles.jsx"
import useEmblaCarousel from "embla-carousel-react";


const Carousel = ({story}) => {
    const wrapperRef = useRef(null);
    // Definition of Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: false,
        skipSnaps: false,
        containScroll: 'trimSnaps',
        align: 'center' });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const photos = story.content?.body[0]?.Photo || []; // Load Data of Carousel Photos
    const CarouselYN = story.content?.body[0].CaruselYN ?? false; // Load Toggle Carousel state
    const photo = story.content?.body[0]?.Image[0] || []; // Load single Image
    const PhonePhoto = story.content?.body[0].Image[0].ImagePhone //Loading Phone Image



    useEffect(() => {
        if(!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };
        emblaApi.on('select', onSelect);
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();

    }, [emblaApi]);

    useEffect(() => {
        const node = wrapperRef.current;
        if (!node || !emblaApi) return;

        const threshold = 150; // wie schnell es zappen soll
        let lastScrollTime = 5;

        const onWheel = (e) => {
            const now = Date.now();
            console.log('wheel event triggered', e);
            if (now - lastScrollTime < 300) return;

            const delta =e.deltaX;

            if (Math.abs(delta) > threshold && Math.abs(delta) > Math.abs(e.deltaY)) {
                e.preventDefault();
                lastScrollTime = now;

                if (delta > 0) {
                    if(!emblaApi.canScrollNext()) return;
                    emblaApi.scrollNext();
                } else {
                    if(!emblaApi.canScrollPrev()) return;
                    emblaApi.scrollPrev();
                }
            }
        };
        console.log("Embla API:", emblaApi);

        node.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            node.removeEventListener("wheel", onWheel);
        };
    }, [emblaApi]);

    console.log('Data Carousel old:', photos);
    console.log('Data Carousel Yes/ NO:', CarouselYN);
    console.log('Data of Photo:', photo);
    console.log(' Data of PhonePhoto:', PhonePhoto)


    const useWindowWidth = () => {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return width;
    };

    const width = useWindowWidth();

    if(!CarouselYN) {
        // Zeige nur ein Bild an

        const desktopSRC = photo?.Image.filename || '' ;
        const mobileSRC = PhonePhoto.filename || '';
        // Ist das Bild größer als 768px?
        const src = width <= 768? mobileSRC : desktopSRC;
        const isVideo = src.toLowerCase().endsWith(".mp4"); // prüft ob Video

        return (
                <Link to={photo?.link?.cached_url || "#"}>
                    {isVideo ? (
                        <VideoContainer
                            src={src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            alt={src?.alt || "Video"}
                        />
                    ) : (
                        <ImagesContainer
                            src={src}
                            alt={src?.alt || "Image"}
                        />
                    )}
                </Link>
        )
    }

    return (
        <>
            <Embla ref={wrapperRef}>
                <EmblaViewport ref={emblaRef}>
                    <EmblaContainer>
                        {
                            photos.map((section, index) => {
                                const filename = section.Image?.filename || '';
                                const isVideo = filename.toLowerCase().endsWith('.mp4'); // auf mp4 prüfen

                                return isVideo ? (
                                    <EmblaSlide key={index}>
                                        <Link to={section.link?.cached_url}>
                                            <VideoContainer
                                                src={filename}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                alt={section.Image?.alt}
                                            />
                                        </Link>
                                    </EmblaSlide>
                                ) : (
                                    <EmblaSlide key={index}>
                                        <Link to={section.link?.cached_url}>
                                            <ImagesContainer
                                                src={filename}
                                                alt={section.Image?.alt}
                                            />
                                        </Link>
                                    </EmblaSlide>
                                );
                            })
                        }

                    </EmblaContainer>
                </EmblaViewport>
                <div style={{display: 'flex', justifyContent: 'start', gap: '10px', marginTop: '1rem'}}>
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '100%',
                                background: 'transparent',
                                border: 'none',
                                outline: `1px solid ${index === selectedIndex ? '#000' : '#ccc'}`,
                                outlineOffset: '-2px', // nach innen versetzen
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </div>

            </Embla>

        </>
    )
}


export default Carousel;