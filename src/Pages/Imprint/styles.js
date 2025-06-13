import styled from "styled-components";

export const Container = styled.div.attrs(() => ({
    className: "text-base"
}))`
    margin-top: 150px;
    margin-right: 20vw;
    margin-left: 5vw;
    margin-bottom: 10vh;
    
    
    @media (max-width: 480px) {
        
        margin: 10px;
        max-width: 100%;
    }
    
`

export const TextPart = styled.div`
    
`