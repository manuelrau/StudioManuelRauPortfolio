import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
    
    body {
        height: 100vh;
        width: 100vw;
        padding: 0;
        overflow: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: 'Lars', sans-serif;
        color: #1a1a1a;
        background-color: #D6D6D6 ;
    }
    #root {
        height: auto;
        width: 100vw;
    }
`