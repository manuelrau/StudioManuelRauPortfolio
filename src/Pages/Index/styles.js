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
    margin-bottom: 20px;
    
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
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border-bottom: 1px solid black;
    justify-content: space-between;

    &:last-child {
        border-bottom: none;
    }

    &:hover ${Imagehover} {
        display: block;
        z-index:10;

    }
    
`
export const IndexWrapper = styled.div`
    .LinkClass {
        text-decoration: none;
        color: black;
        padding: 20px 0 5px 0;
        width: 100%;

        &:hover {
            
            //text-decoration-style: dotted;
            text-decoration-thickness: 3px;
        }
        
    }
    margin-top: 60px;
    padding: 0 20px 0 20px; 
    display: grid;
    color: black;
    font-family: IBM Plex Sans, sans-serif;
    justify-content: stretch;
    font-size: 30px;
    
    
    @media (max-width: 768px) {
        
        padding: 10px 0;
    }
    

    
    @media (max-width: 480px) {
        
       
        margin-top: 0;
        display: flex;
        padding: 0;
        flex-direction: column;
        width: 100vw;
        justify-content: center;
        .LinkClass {
            text-align: center;
            padding: 20px 0 20px 0;
        }
}
`