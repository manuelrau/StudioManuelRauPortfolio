import styled from "styled-components";

export const Wrapper = styled.div.attrs(() => ({
    className: "text-lg",
}))`
    width: 60%;

    margin-left: auto;
    margin-right: 50px;
    padding: 50px 0 50px 0;

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        padding: 20px 0 20px 0;
        flex-direction: column;
    }
`

export const TextStyle = styled.div.attrs(() => ({
    className: "text-2xl",
}))`
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    
    @media (max-width: 480px) {
      
    }
`
export const LinkWrapper = styled.div` 
    display: flex;
    gap: 5px;
    padding: 50px 0 50px 0;
    max-width: 25%;
    align-items: flex-start;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        padding: 0 10px;
        max-width: 50%;
        margin-bottom: 50px;
    }
    
    @media (max-width: 480px) {
        max-width: 90%;
        margin-bottom: 60px;
    }
`
export const Tag = styled.a.attrs(()=> ({
    className: 'link-base',
}))`
`

export const SVGStyling = styled.img`
    width: 16px;
    
`

export const TextWrapper = styled.span` 

    display: flex;
    align-items: baseline;


    @media (max-width: 768px) {
        padding: 0 10px;
        flex-direction: column;
    }
`

export const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 20%;
    padding: 50px 0  50px 0;
    
    @media (max-width: 768px) {
        padding: 0 10px 0 10px;
    }
`

export const TagsHeadline = styled.h4.attrs(() => ({
    className:"headline-h4"
}))`
    margin-top: 10px;
    margin-bottom: 5px;
    text-decoration: none;
    
`
export const Tags = styled.p`
 margin: 5px 0 5px 0
`


export const Wrapp = styled.div`
    display: flex;
    justify-content: center;
    
    @media (max-width: 768px) {
        display: block;
    }
`