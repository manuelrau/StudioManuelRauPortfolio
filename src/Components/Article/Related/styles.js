import styled from "styled-components";

export const Wrapper = styled.div`

`

export const ImageWrapper = styled.div`

`

export const Image = styled.img`
    width: 100%;
    height: 40vh;
    border-radius: 20px;
`

export const Section = styled.section`
    display: flex;
    gap: 80px;
    margin: 20px 0 50px 0;
`

export const Component = styled.section`
    display: flex;
`

export const HeadlineTwo = styled.h2.attrs(() => ({
    className: 'headline-h2',
}))` 
    margin: 0;
`

export const HeadlineThree = styled.h3.attrs(() => ({
    className: 'headline-h3',
}))`
    margin: 10px 0 10px 0;
    
`

export const HeadlineFour = styled.h4.attrs(() => ({
    className: 'headline-h4',
}))`
    margin: 10px 0 10px 0;
`