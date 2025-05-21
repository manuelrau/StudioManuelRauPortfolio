import styled from "styled-components";


export const Container = styled.div.attrs(() => ({
    className: 'footer',
}))`
    display: inline-flex;
    flex-direction: row;
    gap: 0.75rem;
    padding: 1.5rem;
    background-color: #D6D6D6;
    font-size: 26px;
    width: 100%; 
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-top: solid 1px black;

    &.orange {
        background: #FF926E; /* Überschreibe, wenn die Klasse "orange" vorhanden ist */
    }
    
    .imprint{
        font-size: 1.25rem
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
        margin-bottom: 5rem;
    }

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

    @media (max-width: 1024px) {
        padding: 1rem;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
    @media (max-width: 480px) {
        padding: 2.5rem;
    }
`
export const Icon = styled.img`
    height: 25px;

`
export const Text = styled.p.attrs(() => ({
    className: 'text-base'
})) `
    color: black;
    max-width: 450px;
    
    @media (max-width: 1024px) {
        max-width: 40%;
    }

    @media (max-width: 768px) {
        max-width: 80%;
    }
    @media (max-width: 480px) {
        max-width: 80%;
    }
`


