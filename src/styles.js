import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
  
    
    body {
        margin: 0;
        padding: 0 40px 0 40px;
        height: 100vh;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: 'Lars', sans-serif;
        color: #1a1a1a;
        overflow-x: hidden;
        background-color: #D6D6D6;
        
    }
    a {
        text-decoration: none;
        color: black;
    }
    #root {
        height: auto;
    }
`

export const FooterContainer = styled.div`
 width: 100%;
    display: flex;
    
`