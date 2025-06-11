import styled from "styled-components";

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    
    
    @media (max-width: 1024px) {
    }
    
    @media (max-width: 768px) {
        height: auto;
        
    }

    @media (max-width: 480px) {
        height: auto
    }
`


export const Video = styled.video`
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;

    @media (max-width: 768px) {
        display: block;
        height: auto
    }

`

export const ImageWrapper = styled.div`
    flex-wrap: wrap;
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: .5rem;
    column-gap: 6rem;
    padding: 2rem;

    @media (max-width: 1024px) {
    }

    @media (max-width: 768px) {
        column-count: 1;

        padding: 0;
        margin-bottom: 25px;
        display: block;
        
    }

    @media (max-width: 480px) {
        margin-bottom: 40px;
    }

    
`

export const WrapperComponentPackage = styled.div`

    @media (max-width: 1024px) {
        
    }

    @media (max-width: 768px) {

        margin-bottom: 25px;

    }

    @media (max-width: 480px) {
        
        margin-bottom: 20px;
    }
`
export const FullSizeWrapper = styled(ImageWrapper)`
    grid-column: span 2; /* über beide Spalten */
    grid-template-columns: repeat(1, 1fr);
    row-gap: 0;
    
`
export const RightWrapper = styled(ImageWrapper)` 
    grid-column: span 2;
    grid-template-columns: repeat(1, 1fr);
    max-width: 60%;
    justify-self: end;
    margin-bottom: 40px;

    @media (max-width: 768px)  {
        max-width: 100%;
    }
    
    @media (max-width: 480px)  {
        max-width: 100%;
        margin-bottom: 20px;
    }
`
export const VerticalWrapper = styled(ImageWrapper)`
    width: 75%;
    display: flex;
    
    @media (max-width: 480px)  {
        width: 100%;
    }
`
export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 768px) {
        align-items: center;
        width: auto;
        height: auto;

    }
`

export const ParagraphStyle = styled.p.attrs(() => ({
    className: 'text-sub-sm-mono',
}))`
    display: flex;
    margin: 5px 0;
    width: 100%;
    text-align: left;
    align-self: stretch;

    @media (max-width: 480px)  {
        line-height: 1.45;
    }

`
