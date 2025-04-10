import styled from "styled-components";

export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 50px 0 50px 0;
`

export const CenterBox = styled.div`
    width: 100%;
    max-width: 550px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

export const AboutPtag = styled.p.attrs(() => ({
    className: 'bigText'
})) `

`
export const Section = styled.section`
    display: flex;
    margin-top: 50px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: normal;
    padding: 0 20px 0 20px;
`
export const Images = styled.img` 
    height: auto;
    max-width: 80%;
    object-fit: contain;
`

export const Wrapper = styled.div`
    background: #FF926E ;
`