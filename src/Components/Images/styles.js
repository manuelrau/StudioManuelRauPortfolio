import styled from "styled-components";

export const Container = styled.div`
    column-count: 4;
    
    column-gap: 2rem;
    row-gap: 2rem;
    padding: 2rem;
    margin-bottom: 10rem;

    @media (max-width: 1024px) {
        column-count: 2;
    }

    @media (max-width: 768px) {
        column-count: 2;
        column-gap: 1.5rem;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        column-count: 1;
        column-gap: 0.5rem;
        padding: 0 0 .5rem 0;
    }
`
export const ImageWrapper = styled.img`
    width: 100%;
    margin: 0;
    display: block;
    break-inside: avoid;
    transition: transform 0.3s ease;
    border-radius: 5px;

    @media (max-width: 1024px) {
        
    }
    
    @media (max-width: 768px) {
      
    }

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        justify-content: center;
    }
`

export const VideoWrapper = styled.video`
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
`

export const LinkWrapper = styled.div`
    position: relative;
    display: block;
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 2rem;

  &:hover .hover-info {
    opacity: 1;
    visibility: visible;
    border-radius: 5px;  
  }
    
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
    
`;

export const HoverInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.6); // halbtransparenter Layer
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
    z-index: 2;
    font-size: 0.9rem;
    font-family: IBM Plex Mono, monospace;
`;