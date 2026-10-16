import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    height: ${window.innerHeight*.8}px;

    margin: 60px 20px 0 20px;
    overflow: hidden;
    object-fit: cover;

    @media (max-width: 1024px) {
        margin-top: 20px;

        height: ${window.innerHeight*.8}px;
    }

    @media (max-width: 480px) {
        margin: 20px 0px 0px 0px;
        padding: 0 5px 20px 5px;
        width: 100%;
        height: ${window.innerHeight - 20}px;
        box-sizing: border-box;
    }
`

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 5px;

    @media (max-width: 768px) {
        height: 80svh;
        max-width: 90%;
        margin: 0;
        display: block;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        margin: 0;
    }
`