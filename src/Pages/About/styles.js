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
    className: 'text-lg'
})) `

`

export const AboutText = styled.p.attrs(() => ({
    className: 'text-sm'
}))` 
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

export const HeadlineH1 = styled.h1.attrs(() => ({
    className: 'headline-h1'
}))`
    display: flex;
    justify-content: center;
`

export const HeadlineH3 = styled.h3.attrs(() => ({
    className: 'headline-h3'
}))`
`