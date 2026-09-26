import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root{
        // Generall Color
        --color-Background-Primary: #D6D6D6;
        --color-About-Background: #FFCCEC;
        --color-Footer-Background: #111111;
        
        // Darkmode
        --color-Backround-Darkmode-Primary: #111111;
        --color-About-Darkmode-Background: #111111;
        --color-Footer-Darkmode-Background: #111111;
        
        // Text Color
        --color-text-primary: #1a1a1a;
        --color-text-secondary: #ffffff;
        --color-text-link: #111111;
        
        // Text Color Darkmode

        --color-text-Darkmode-primary: #ffffff;
        --color-text-Darkmode-secondary: #ffffff;
        --color-text-Darkmode-link: #ffffff
 
    }
    body {
        margin: 0;
       // padding: 0 20px 0 20px;
        height: 100vh;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: IBM Plex Sans, Helvetica, sans-serif;
        color: var(--color-text-primary);
        overflow-x: hidden; // verhindert horizontales scrollen 
        background-color: var(--color-Background-Primary);
        
        @media (max-width: 768px) {
            //padding: 0 20px 0 20px;
        }

        @media (max-width: 480px) {
            //padding: 0 5px 0 5px;
        }
        
    }
    body.orange {
        //background-color: #F388CC ;
        //background-color: #F55321;
        background-color: var(--color-About-Background);
    }
    
    a {
        font-family: IBM Plex Mono, monospace;
        text-transform: uppercase;
        color: var(--color-text-link);
        text-decoration: none;
        font-weight: 400;
        transition: font-weight 0.5s ease, transform 0.3s ease;
       
        
        
        &:hover{
            font-weight: 700;
        }
    }
    h1 {
        font-size: 42px;
        font-weight: 400;
    }
    .headline-h1 {
        font-size: 4.7rem;
        line-height: 5.4rem;
       //font-weight: 400;
        
        @media (max-width: 768px) {
            font-size: 42px;
            line-height: 3.8rem;
        }
        @media (max-width: 480px) {
            font-size: 2.25rem;
            line-height: 3.8rem;
        }
    }
    .headline-h2 {
        font-size: 36px;
        font-weight: 400;

        @media (max-width: 768px) {
            font-size: 1.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }
    .headline-h3 {
        font-size: 1.3rem;
        font-weight: 600;
    }
    .headline-h4 {
        font-size: 1rem;
        font-weight: 400;
    }
    .text-sub-xs { 
        font-size: 0.75rem;
        font-family: IBM Plex Mono, monospace;
    }
    .text-sub-sm-mono {
        font-size: 1rem;
        color: #404040;
        font-family: IBM Plex Mono, monospace;
        
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
        font-size: clamp(1rem, .99rem + .2vw, 1.1rem)
    }
    .text-3xl {
        font-size: 1.7rem;
        line-height: 1.3;
        
        @media (max-width: 768px) {
            font-size: 1.2rem;
            line-height: 1.5;
        }

        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
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
    .link-base-small {
        font-size: 0.85rem;
        font-family: IBM Plex Mono, monospace;
    }
    .tags {
        font-size: 14px;
        font-family: IBM Plex Sans, sans-serif;
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