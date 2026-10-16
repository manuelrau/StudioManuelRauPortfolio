import styled from "styled-components";


export const  HeaderImage = styled.div`
    padding: 0;
    display: block;
    margin: 0;
    max-width: 100%;
    will-change: transform;
    transform-origin: center;
    transform: scale(0.80);

    @media (max-width: 768px) {
        transform: none;
    }
`;