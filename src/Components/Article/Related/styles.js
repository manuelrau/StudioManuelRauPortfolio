import styled from "styled-components";

export const Wrapper = styled.div`

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
    }
`

export const Component = styled.section`
    display: flex;
`

export const HeadlineTwo = styled.h2.attrs(() => ({
    className: 'headline-h2',
}))` 
    margin: 0;
`


export const HeadlineFour = styled.h4.attrs(() => ({
    className: 'headline-h4',
}))`
    margin: 10px 0 10px 0;
`