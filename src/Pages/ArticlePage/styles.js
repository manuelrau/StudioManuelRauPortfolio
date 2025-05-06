import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 0 0 0;

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        padding: 0;
    }

    @media (max-width: 480px) {
        padding: 0;
    }
`
export const WrapperTags = styled.div`
    display: flex;
`
export const HeadlineThree = styled.h3.attrs(()=> ({
    className: 'headline-h3',
}))`
    
`