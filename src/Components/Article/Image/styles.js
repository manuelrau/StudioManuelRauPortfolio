import styled from "styled-components";

export const Img = styled.img`
    max-width: 100%;
    height: 70vh;
    padding: 20px 0 20px 0;
    
    
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

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 50px 0;

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }

`