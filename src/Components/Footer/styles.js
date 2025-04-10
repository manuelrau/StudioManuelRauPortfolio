import styled from "styled-components";
import { GlobalStyle} from "../../styles.js";

export const Container = styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 0.75rem;
    padding: 1.5rem;
    background-color: #D6D6D6;
    font-size: 26px;
    width: 100%; 
    height: 100%;
    justify-content: space-between; 
    align-items: flex-end; 
    border-top: solid 1px black;

`

export const SocialMedia = styled.a.attrs(()=> ({
    className: 'link-base'
}))`
    text-decoration: none;
    color: black;
`

export const SocialContainer = styled.div`
    gap: 0.7rem;
    display: flex;
    align-items: center;
`
export const Icon = styled.img`
    height: 25px;

`
export const Text = styled.p.attrs(() => ({
    className: 'text-base'
})) `
    color: black;
    max-width: 450px;
`


