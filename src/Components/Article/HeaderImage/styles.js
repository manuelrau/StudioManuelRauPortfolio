import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh; /* oder eine andere Höhe, die du brauchst */
    margin-top: 40px;
    width: 100%;
    overflow: hidden;
`
export const ImageDefinition = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 5px;
`