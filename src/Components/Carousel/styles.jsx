import styled from "styled-components";


export const Embla = styled.div` 
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    
`
export const EmblaViewport = styled.div`
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;            /* Firefox */
    -ms-overflow-style: none;
`

export const EmblaContainer = styled.div`
    display: flex;
`

export const EmblaSlide = styled.div`
    flex: 0 0 80%;
    scroll-snap-align: start; /* <--- Slide snappt am Anfang */
    min-width: 0;
    padding: 0 0.5rem;
    box-sizing: border-box;
`

export const ImagesContainer = styled.img`
    width: auto;
    height: 90vh;
    object-fit: contain;
    display: block;
    max-width: 100%;
    margin: auto;
    border-radius: 10px;
`