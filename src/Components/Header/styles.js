import styled from "styled-components";

export const H1 = styled.h1`
    font-family: Lars, sans-serif;
    font-weight: normal;
    font-size: 2.5em;
    text-transform: uppercase;
`
export const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #D6D6D6;
`

export const Wrapper = styled.div`
    width: 100%; 
    height: 100%;
    gap: 174px; 
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;
`
export const Link = styled.a`

    text-decoration: none;
    color: black;
`

export const HeaderLogo = styled.img`
    height: 3.2vh;
    width: auto;
    padding: 20px 0 20px 0;
`