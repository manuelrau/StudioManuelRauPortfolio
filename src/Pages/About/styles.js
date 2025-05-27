import styled from "styled-components";

export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0 0 50px 0;

    @media (max-width: 480px) {
        padding: 0;
    }
`

export const CenterBox = styled.div`
    width: 100%;
    max-width: 550px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const AboutPtag = styled.p.attrs(() => ({
    className: 'text-lg'
})) `

`

export const AboutText = styled.p.attrs(() => ({
    className: 'text-base'
}))`
    text-indent: 15px;
`
export const Section = styled.section`
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-shrink: 0;
    grid-gap: 1rem;
    margin: 100px 0 100px 0;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: normal;
    margin-bottom: 5rem;
    padding: 0 20px 0 20px;
`
export const Images = styled.img`
    max-width: 100%;
    height: 100%;
    margin: 0;
    display: block;
    break-inside: avoid;
    transition: transform 0.3s ease;
    border-radius: 5px;
    object-fit: cover;
`

export const Wrapper = styled.div`
    background: #FF926E ;
`

export const HeadlineH1 = styled.h1.attrs(() => ({
    className: 'headline-h1'
}))`
    display: flex;
    justify-content: center;
    margin: 100px 0 0 0;
`

export const HeadlineH3 = styled.h3.attrs(() => ({
    className: 'headline-h3'


}))`
    margin:  0 0 30px 0;
`
