import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";


export const Embla = styled.div` 
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    
`
export const EmblaViewport = styled.div`
overflow: hidden;
width: 100%;
`

export const EmblaContainer = styled.div`
    display: flex;
`

export const EmblaSlide = styled.div`
    flex: 0 0 80%;
    min-width: 0;
    padding: 0 0.5rem;
    box-sizing: border-box;
`

export const ImagesContainer = styled.img`
    width: auto;
    height: 90vh;
    max-width: 100%;
    objectFit: contain;
    margin: auto;
    border-radius: 10px;

`