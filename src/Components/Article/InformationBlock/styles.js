import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 20%;
    padding: 50px 0 50px 0;
    order: -1;

    @media (max-width: 768px) {
        order: 0;
        width: 100%;
        padding: 0 10px 0 10px;
    }
`

export const TagsHeadline = styled.h4.attrs(() => ({
    className: "headline-h4"
}))`
    margin-top: 10px;
    margin-bottom: 5px;
    text-decoration: underline;
`

export const Tags = styled.p.attrs(() => ({
    className: 'tags',
}))`
    margin: 0 0 5px 0;
`

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 50px 0 50px 0;
    max-width: 25%;
    align-items: flex-start;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        padding: 0;
        max-width: 50%;
        margin-bottom: 10px;
    }

    @media (max-width: 480px) {
        max-width: 90%;
        margin-bottom: 10px;
    }
`

export const StyleLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 20vw;

    @media (max-width: 768px) {
        width: auto;
    }
`

export const SVGStyling = styled.img`
    width: 16px;
    padding-right: 4px;
`

export const Tag = styled.a.attrs(() => ({
    className: 'link-base-small',
}))`
`