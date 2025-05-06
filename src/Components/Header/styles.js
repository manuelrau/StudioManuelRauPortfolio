import styled from "styled-components";

export const Header = styled.header.attrs(() => ({
    className: 'header',
}))`
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #D6D6D6;

    &.orange {
        background: #FF926E; /* Überschreibe, wenn die Klasse "orange" vorhanden ist */
    }

    @media (max-width: 480px) {
        header {
            position: static;
        }
    }
 `


export const Wrapper = styled.div `

    .LinkNameHeader {
        color: black;
        font-family: 'Lars Mono', monospace;
        padding: 0 40px 0 40px;
    }
    .LinkNameHeader.visited {
        text-decoration-line: underline;
        text-decoration-style: dotted;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 17.5%; /* 3.5px */
        text-underline-offset: 25%; /* 5px */
        text-underline-position: from-font;
        text-transform: uppercase;
    }
    
    width: 100%; 
    height: 100%;
    gap: 174px; 
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`

export const HeaderLogo = styled.img`
    height: 3.2vh;
    width: auto;
    padding: 20px 0 20px 0;
`