import styled from "styled-components";

export const Wrapper = styled.div.attrs(() => ({
    className: 'footer',
}))`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 2rem;

    .imprint{
        font-size: 0.875rem;
        font-family: 'Lars Mono', monospace;
        text-transform: uppercase;
    }

    @media (max-width: 1024px) {
        display: flex;
        padding: 2rem;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin-bottom: 8rem;
    }
`
export const Wrapp = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    align-items: center;
    width: 100%;

    @media (max-width: 1024px) {
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: center;
    }
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin-bottom: 0.5rem;
    }
`

export const Container = styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 0.75rem;
    padding-top: 1.5rem;
    background-color: #D6D6D6;
    font-size: 26px;
    width: 100%; 
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-top: solid 1px #666;
    
    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 2rem;
    }

    &.orange {
        background: #FF926E; /* Überschreibe, wenn die Klasse "orange" vorhanden ist */
    }
    

`

export const SocialMedia = styled.a.attrs(()=> ({
    className: 'text-base'
}))`
    text-decoration: none;
    color: black;
    padding: 0.6rem 0;
    
`

export const SocialContainer = styled.div`
    gap: 0.5rem;
    display: flex;
    align-items: center;
    
`
export const Icon = styled.img`
    height: 24px;

`
export const Text = styled.p.attrs(() => ({
    className: 'text-base'
})) `
    color: black;
    max-width: 450px;
    
    @media (max-width: 1024px) {
        max-width: 70%;
    }

    @media (max-width: 768px) {
        max-width: 80%;
    }
    @media (max-width: 480px) {
        max-width: 100%;
    }
`


