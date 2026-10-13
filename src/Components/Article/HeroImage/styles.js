import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 100%;
    margin: 10px 0;
    width: 100%;

    @media (max-width: 768px) {
        align-items: center;
        width: auto;
        height: auto;
    }
`

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 4px;

    @media (max-width: 768px) {
        height: auto;
    }

    @media (max-width: 480px) {
        border-radius: 4px;
        height: auto;
    }
`