import styled from "styled-components";

export const Container = styled.div`
    column-count: 5;
    column-gap: 1rem;
    padding: 2rem;
    
`
export const ImageWrapper = styled.img`
    width: 100%;
    margin-bottom: 1rem;
    break-inside: avoid;
    transition: transform 0.3s ease;
    border-radius: 20px;
    
    
`
export const LinkWrapper = styled.div`
    position: relative;
    display: inline-block;

  &:hover .hover-info {
    opacity: 1;
    visibility: visible;
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
    font-family: monospace;
`;