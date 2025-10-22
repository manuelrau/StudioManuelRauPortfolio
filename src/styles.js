import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
    
    body {
        margin: 0;
        padding: 0 20px 0 20px;
        height: 100vh;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: IBM Plex Sans, Helvetica, sans-serif;
        color: #1a1a1a;
        overflow-x: hidden; // verhindert horizontales scrollen 
        background-color: #D6D6D6;
        
        @media (max-width: 768px) {
            padding: 0 20px 0 20px;
        }

        @media (max-width: 480px) {
            padding: 0 5px 0 5px;
        }
        
    }
    body.orange {
        background-color: #F388CC ;
    }
    
    a {
        font-family: IBM Plex Mono, monospace;
        text-transform: uppercase;
        color: black;
        text-decoration: none;
        font-weight: 400;
        transition: font-weight 0.5s ease, transform 0.3s ease;
       
        
        
        &:hover{
            font-weight: 700;
            //transform: scale(1.05);
        }
    }
    h1 {
        font-size: 2.5rem;
        font-weight: 400;
    }
    .headline-h1 {
        font-size: 6.75rem;
        line-height: 7rem;
       //font-weight: 400;
        
        @media (max-width: 768px) {
            font-size: 3.5rem;
            line-height: 3.8rem;
        }
    }
    .headline-h2 {
        font-size: 2.5rem;
        font-weight: 600;
    }
    .headline-h3 {
        font-size: 1.3rem;
        font-weight: 600;
    }
    .headline-h4 {
        font-size: 1.2rem;
        font-weight: 400;
    }
    .text-sub-xs { 
        font-size: 0.75rem;
        font-family: IBM Plex Mono, monospace;
    }
    .text-sub-sm-mono {
        font-size: 1.05rem;
        color: #404040;
        font-family: IBM Plex Sans, monospace;
        
    }
    .text-xs { font-size: 0.75rem; }
    .text-sm { 
        font-size: 0.875rem; 
        font-family: IBM Plex Sans, sans-serif;
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
    .text-2xl { 
        font-size: clamp(1rem, .94rem + .26vw, 1.5rem)
    }
    .text-3xl {
        font-size: 1.7rem;
        line-height: 1.3;
    }
    
    
    .bigText {
        font-size: 1.6rem;
        line-height: 1.15;
        color: black;
    }
    .link-base { 
        font-size: 1.0rem;
        font-family: IBM Plex Mono, monospace;
    }
    .link-header { 
        font-size: 1rem;
        font-family: IBM Plex Mono, monospace;
       }
    
    #root {
        height: auto;
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    
`