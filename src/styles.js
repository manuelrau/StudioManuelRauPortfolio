import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
    
    body {
        height: 100vh;
        width: 100vw;
        padding: 40px 0 0 40px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: 'Lars', sans-serif;
        color: #1a1a1a;
        overflow: visible;
        background-color: #D6D6D6 ;
        
    }
    a {
        text-decoration: none;
        color: black;
    }
    #root {
        height: auto;
        width: 100vw;
    }
`

export const FooterContainer = styled.div`
 width: 100%;
    display: flex;
    
`