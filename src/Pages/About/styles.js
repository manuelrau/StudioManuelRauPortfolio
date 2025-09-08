import styled from "styled-components";

export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0 0 10px 0;

    @media (max-width: 480px) {
        padding: 0;
        margin: 0 0 50px 0;
    }
`

export const CenterBox = styled.div`
    width: 100%;
    max-width: 550px;
    padding: 0; // abstände 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const AboutPtag = styled.p.attrs(() => ({
    className: 'text-lg'
})) `
    
    @media (max-width: 768px) {
        
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`

export const AboutText = styled.div.attrs(() => ({
    className: 'text-base'
}))`
    
`
export const Section = styled.section`
    flex-wrap: wrap;
    display: grid;
    align-items: start;
    align-content: start;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(0, auto);
    flex-shrink: 0;
    grid-gap: 1rem;
    margin: 100px 0 10px 0;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
    }
    
    @media (max-width: 768px) {
    }
    
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 70px 0 20px 0;
    }
`
export const Container = styled.div`
    display: flex;
    //justify-content: space-around;
    flex-direction: column;
    align-items: start;
    align-content: start;
    margin-bottom: 1rem;
    padding: 0 20px 0 20px;

    @media (max-width: 480px) {
        margin-bottom: 3rem;
        padding: 0;
    }
`
export const Images = styled.img`
    max-width: 100%;
    height: auto;
    margin: 0;
    display: block;
    break-inside: avoid;
    transition: transform 0.3s ease;
    border-radius: 5px;
    object-fit: cover;
`
export const Video = styled.video`
    max-width: 100%;
    height: 60%;
    margin: 0;
    display: block;
    break-inside: avoid;
    transition: transform 0.3s ease;
    border-radius: 5px;
    object-fit: cover;`

export const Wrapper = styled.div`
    background: #F388CC ;
`

export const HeadlineH1 = styled.h2.attrs(() => ({
    className: 'headline-h2'
}))`
    display: flex;
    justify-content: center;
    margin: 100px 0 0 0;
    
    @media (max-width: 768px) {
        margin: 75px 0 0 0;
    }

    @media (max-width: 480px) {
        margin: 25px 0 0 0;
        font-size: 1.75rem;
    }
`

export const HeadlineH3 = styled.h3.attrs(() => ({
    className: 'headline-h3'


}))`
    margin:  0 0 15px 0;
`


export const Chapter = styled.div`
    margin: 30px 0;
    
    @media (max-width: 768px) {
        margin: 50px 10px;
    }
`