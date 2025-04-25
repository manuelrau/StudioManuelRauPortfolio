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
    body.orange {
        background-color: #FF926E ;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    h1 {
        font-size: 1.8rem;
        font-weight: 400;
    }
    .headline-h1 {
        font-size: 2rem;
    }
    .headline-h3 {
        font-size: 1.3rem;
        font-weight: 400;
    }
    .text-xs { font-size: 0.75rem; }
    .text-sm { 
        font-size: 0.875rem; 
        font-family: 'Lars', sans-serif;
        line-height: 1.15;
    }
    .text-base { 
        font-size: 1rem; 
        line-height: 1.3;
        color: black;
    }
    .text-lg { 
        font-size: 1.125rem;
        line-height: 1.3;
    }
    .text-xl { font-size: 1.25rem; }
    .text-2xl { font-size: 1.5rem; }
    .bigText {
        font-size: 1.6rem;
        line-height: 1.15;
        color: black;
    }
    .link-base { font-size: 1.25rem }
    .link-header { 
        font-size: 1rem;
        font-family: Lars Mono, monospace;
        background-color: black}
    
    #root {
        height: auto;
    }
`

export const FooterContainer = styled.div`
 width: 100%;
    display: flex;
    
`