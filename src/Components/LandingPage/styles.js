import styled from "styled-components";


export const  HeaderImage = styled.div`
    display: block;
    margin: 0;
    max-width: 95%;
    height: 80vh;
    background-image: url(${props => props.$src});
    background-size: cover;
    background-position: center;
`;