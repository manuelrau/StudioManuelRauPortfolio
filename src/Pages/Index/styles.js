import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Tags = styled.div.attrs(() => ({
    className: 'text-base', // Style definition Global

}))`
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    white-space: nowrap;
    width: fit-content;
    display: flex;
    justify-content: end;
    align-items: center;
    
    @media (max-width: 480px) {
        display: none;
    }
`


export const Imagehover = styled.img `
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    width: 280px; /* Bildgröße anpassen */
    
`
export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: inherit;
    
`
export const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid black;
    justify-content: space-between;

    &:hover ${Imagehover} {
        display: block;
        z-index:10;

    }
    
`
export const IndexWrapper = styled.div`
    .LinkClass {
        text-decoration: none;
        color: black;
        padding: 20px 0 20px 0;
        width: 100%;

        &:hover {
            text-decoration: underline;
        }
    }
    margin-top: 60px;
    display: grid;
    color: black;
    font-family: IBM Plex Sans, sans-serif;
    justify-content: stretch;
    font-size: 30px;
    padding: 0;
    
    @media (max-width: 480px) {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        width: 100vw;
        justify-content: center;
        .LinkClass {
            text-align: center;
        }
}
`