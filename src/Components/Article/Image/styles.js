import styled from "styled-components";

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    padding: 20px 0 20px 0;
    border-radius: 15px;
    
    
    @media (max-width: 1024px) {
        height: 40vh
    }
    
    @media (max-width: 768px) {
        height: 50vh
    }

    @media (max-width: 480px) {
        height: 50vh
    }
`


export const Video = styled.video`
    max-width: 100%;
    max-height: 100%;
    padding: 20px 0 2px 0;
`

export const ImageWrapper = styled.div`
    flex-wrap: wrap;
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    row-gap: 5rem;
    column-gap: 6rem;
    padding: 2rem;

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }

`
export const FullSizeWrapper = styled(ImageWrapper)`
    grid-column: span 2; /* über beide Spalten */
    grid-template-columns: repeat(1, 1fr);
    row-gap: 0;
`

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const ParagraphStyle = styled.p.attrs(() => ({
    className: 'text-sub-xs',
}))`
    display: flex;
    margin: 5px 0;
    text-align: left;
    align-self: stretch;

`
