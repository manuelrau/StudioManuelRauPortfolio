import styled from "styled-components";
import { TextWrapper, Wrapper as TextInnerWrapper } from "../../Components/Article/Text/styles.js";

export const Wrapper = styled.div`
    padding: 50px 50px 0 50px;

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        padding: 20px 20px 0 20px;
    }

    @media (max-width: 480px) {
        padding: 5px 5px 0 5px;
    }
`
export const ArticleContentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${TextWrapper} {
        flex: 1 1 60%;
        min-width: 0;
    }

    ${TextInnerWrapper} {
        width: 100%;
        margin: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;

        ${TextWrapper} {
            flex: 1 1 auto;
        }
    }
`
export const ArticleSidebar = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 20%;
    order: -1;

    @media (max-width: 768px) {
        order: 1;
        width: 100%;
    }
`
export const WrapperTags = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 768px) {
        
    }
    
    @media (max-width: 480px) {
        gap: 0;
        
    }
`
export const HeadlineThree = styled.h3.attrs(()=> ({
    className: 'headline-h3',
}))`
    font-family: IBM Plex, Helvetica, sans-serif;
    padding-right: 35px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
        display: flex;
        justify-content: center;
    }
`
