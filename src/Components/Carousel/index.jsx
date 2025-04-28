import React, {useEffect} from "react";
import { useState, useRef} from "react";
import {EmblaSlide, EmblaContainer, Embla, EmblaViewport, ImagesContainer} from "./styles.jsx"
import useEmblaCarousel from "embla-carousel-react";


const Carousel = ({story}) => {
    const wrapperRef = useRef(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: false, skipSnaps: false,
        containScroll: 'trimSnaps', align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const photos = story.content?.body[0]?.BigPhoto || [];



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

        const threshold = 15; // wie schnell es zappen soll
        let lastScrollTime = 0;

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

    return (
        <>
            <Embla ref={wrapperRef}>
                <EmblaViewport ref={emblaRef}>
                    <EmblaContainer>
                        {
                            photos.map((section, index) =>
                                section.filename ? (
                                    <EmblaSlide
                                        key={index}>
                                        <ImagesContainer src={section.filename}
                                             alt={`Foto ${index + 1}`}
                                             className="w-full h-auto rounded shadow"
                                        />

                                    </EmblaSlide>
                                ) : null
                            )
                        }
                    </EmblaContainer>
                </EmblaViewport>
                <div style={{display: 'flex', justifyContent: 'end', gap: '8px', marginTop: '1rem'}}>
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '100%',
                                background: 'transparent',
                                border: 'none',
                                outline: `2px solid ${index === selectedIndex ? '#000' : '#ccc'}`,
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