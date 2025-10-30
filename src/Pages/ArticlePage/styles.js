import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 50px 0 50px;

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        padding: 20px 20px 0 20px;
    }

    @media (max-width: 480px) {
        padding: 5px 5px 0 5px;
    }
`
export const WrapperTags = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 768px) {
        
    }
    
    @media (max-width: 480px) {
        gap: 0;
        
    }
`
export const HeadlineThree = styled.h3.attrs(()=> ({
    className: 'headline-h3',
}))`
    font-family: IBM Plex Mono, monospace;
    padding-right: 35px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
        display: flex;
        justify-content: center;
    }
`
