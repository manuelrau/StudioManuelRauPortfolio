import styled from "styled-components";

export const Wrapper = styled.div`
    border-top: solid 1px black;
    margin-top: 20px;
    
    padding: 0 20px 0 20px;
    
    @media (max-height: 768px) {
    
        padding: 0 10px 0 10px;
}
    
    @media(max-width: 480px) {
        padding: 0 5px 0 5px;
    }
`

export const ImageWrapper = styled.div`

`

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 85%;
    gap: 10%;
    margin: 20px 0 75px 0;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 100%;
        margin: 20px 0 50px 0;
        gap: 2%
    }
`

export const Component = styled.section`
    display: flex;
    
`

export const HeadlineTwo = styled.h2.attrs(() => ({
    className: 'headline-h2',
}))` 
    padding-top: 50px;
    margin: 0;
`


export const HeadlineFour = styled.h4.attrs(() => ({
    className: 'headline-h4',
}))`
    text-decoration: none;
    margin: 10px 0 10px 0;
    font-weight: 400;
    transition: font-weight 0.5s ease, transform 0.3s ease;



    &:hover{
        font-weight: 700;
        //transform: scale(1.05);
    }
`