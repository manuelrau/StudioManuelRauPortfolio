import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { useState, useRef} from "react";
import {EmblaSlide, EmblaContainer, Embla, EmblaViewport, ImagesContainer} from "./styles.jsx"
import useEmblaCarousel from "embla-carousel-react";


const Carousel = ({story}) => {
    const wrapperRef = useRef(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: false, skipSnaps: false,
        containScroll: 'trimSnaps', align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const photos = story.content?.body[0]?.Photo || [];
    const pho = story.content?.body[0]?.Photo || [];
    console.log('Data Carousel:'+ pho);
    console.log('Data Carousel old:'+ photos);


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
    console.log('Data Carousel:', pho);
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
                                            <video
                                                src={filename}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                style={{ width: '100%', height: 'auto', borderRadius: '0 0 10px 10px', objectFit: 'cover' }}
                                            />
                                        </Link>
                                    </EmblaSlide>
                                ) : (
                                    <EmblaSlide key={index}>
                                        <Link to={section.link?.cached_url}>
                                            <ImagesContainer
                                                src={filename}
                                                alt={`Foto ${index + 1}`}
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