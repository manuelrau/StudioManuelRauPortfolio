import styled from "styled-components";

export const Wrapper = styled.div.attrs(() => ({
    className: 'footer',
}))`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid #fff;
    color: #fff !important;

    .imprint{
        font-size: 0.875rem;
        color: #fff !important;
        font-family: IBM Plex Mono, monospace;
        text-transform: uppercase;
    }

    @media (max-width: 1024px) {
        display: flex;
        padding: 0;
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
        margin-bottom: 2rem;
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
    //background-color: #D6D6D6;
    font-size: 26px;
    width: 100%; 
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-top: solid 1px #212121;
    
    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 2rem;
    }
    
    @media (max-width: 480px) {
        
    }

    &.orange {
        //background: #F388CC; /* Überschreibe, wenn die Klasse "orange" vorhanden ist */
        background: #FBFF89;
    }
    

`

export const SocialMedia = styled.a.attrs(()=> ({
    className: 'text-base'
}))`
    text-decoration: none;  
    color: #fff !important;
    padding: 1.5rem 0;
    
`
export const LogoAnimation = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9.5vw;
    text-decoration: none;
    font-weight: 100;
    letter-spacing: -3px;
    margin: 0;
    white-space: pre;

    .word {
        display: inline-block; /* Behält die Leerzeichen zwischen den Wörtern bei */
        //white-space: nowrap; /* Verhindert Zeilenumbrüche innerhalb eines Worts */
    }


    .char { /* Splitting.js fügt eine Klasse 'char' hinzu */
        animation: weight 6s infinite;
        animation-delay: calc(var(--char-index) * 150ms);
        display: inline-block; /* Wichtig, damit Transformationen funktionieren */
    }

    @keyframes weight {
        from {
            font-weight: 300;
        }

        50% {
            font-weight: 500;
        }

        to {
            font-weight: 300;
        }
    }
    
    @media (max-width: 480px) {
        font-size: 16.7vw;
        width: 100%;
        line-height: 3.7rem;
        white-space: break-spaces; /* Erlaubt Zeilenumbruch auf mobilen Geräten */
        flex-wrap: wrap; /* Da display:flex, sorgt für Umbruch */
    }

`

export const SocialContainer = styled.div`
    gap: 0.5rem;
    display: flex;
    align-items: center;
    color: #fff !important;
    
`
export const Icon = styled.img`
    height: 24px;

`
export const Text = styled.p.attrs(() => ({
    className: 'text-base'
})) `
    color: #fff !important;
    
    max-width: 500px;
    margin-bottom: 2rem;
    
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


export const SectionFooter = styled.div`

    flex-direction: column;
    width: 100%;
    background-color: #000;
    padding: 0 20px; 
    color: #fff;
    
    @media (max-width: 768px) {
        //margin-bottom: 6rem;
        width: 100%;
        padding: 0 10px 200px 10px;
    }
    
    @media (max-width: 480px) {
        padding: 0 5px 200px 5px;
      
    }
`