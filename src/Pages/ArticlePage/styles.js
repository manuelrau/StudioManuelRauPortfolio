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
    width: 100%;
    justify-content: space-between;

    @media (max-width: 768px) {
        
    }
    
    @media (max-width: 480px) {
        justify-content: left;
        gap: 20px;
    }
`
export const HeadlineThree = styled.h3.attrs(()=> ({
    className: 'headline-h3',
}))`
`