import {useStoryblok} from "@storyblok/react";
import {AboutPtag, HeadlineH1} from "../../Pages/About/styles.js";
import React, {useEffect} from "react";
import { useState} from "react";
import {EmblaSlide, EmblaContainer, Embla, EmblaViewport, ImagesContainer} from "./styles.jsx"
import useEmblaCarousel from "embla-carousel-react";

const Carousel = () => {
    const story = useStoryblok("home", {version: "draft"})
    console.log(story)

    const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const photos = story.content?.body[0]?.BigPhoto || [];

    useEffect(() => {
        if(!embla) return;

        const onSelect = () => {
            setSelectedIndex(embla.selectedScrollSnap());
        };
        embla.on('select', onSelect);
        setScrollSnaps(embla.scrollSnapList());
        onSelect();

    }, [embla]);
    return (
        <>
            <Embla>
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
                <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1rem'}}>
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => embla?.scrollTo(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: index === selectedIndex ? '#000' : '#ccc',
                                border: 'none',
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