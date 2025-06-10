import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80dvh; /* oder eine andere Höhe, die du brauchst */
    margin-top: 40px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    
    @media (max-width: 480px) {
        margin-top: 10px;
        height:  ${window.innerHeight}px ;
    }
`
export const ImageDefinition = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 5px;
`