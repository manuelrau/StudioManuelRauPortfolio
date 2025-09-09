import styled from "styled-components";


export const Embla = styled.div` 
    overflow: hidden;
    width: 100%;
    max-width: 100dvw;
    margin: 0 auto;

    @media (max-width: 1024px) {
        max-width: 100%;
    }
    
    
    @media (max-width: 480px) {
        body{
            padding: 0;
        }
    }
    
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
    flex: 0 0 95%;
    scroll-snap-align: start; /* <--- Slide snappt am Anfang */
    min-width: 0;
    padding-right: 0.5rem;
    box-sizing: border-box;
`
export const VideoContainer = styled.video`
    width: 100%; 
    height: auto; 
    border-radius: 0 0 10px 10px;
    object-fit: cover;

    @media (max-width: 1024px) {
        height: 76svh;
        max-width: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        height: 105svh;

    }

    @media (max-width: 480px) {

        height: ${window.innerHeight}px;

    }
`


export const ImagesContainer = styled.img`
    width: 110svw;
    height: 98svh;
    object-fit: cover;
    display: block;
    max-width: 100%;
    margin: 0;
    border-radius: 0 0 10px 10px;

    @media (max-width: 1024px) {
        height: 76svh;
        max-width: 100%;
        object-fit: cover;
    }
    
    @media (max-width: 768px) {
        height: 105svh;
        
    }

    @media (max-width: 480px) {

        height: ${window.innerHeight}px;

    }

`