import styled from "styled-components";

export const Wrapper = styled.div.attrs(() => ({
    className: "text-lg",
}))`
    width: 55%;
    margin-left: auto;
    margin-right: 50px;
    padding: 50px 0 50px 0;

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export const paragraphText = styled.p`   
   
    
`