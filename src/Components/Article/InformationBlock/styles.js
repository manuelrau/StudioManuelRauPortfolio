import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0 0 0;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px 20px;
        width: 100%;
        padding: 0 10px 0 10px;
    }
`

// Headline + Wert gehören zusammen und sollen auf Mobile als Einheit nebeneinander
// umbrechen können, statt einzeln auseinandergerissen zu werden
export const Group = styled.div`
    display: contents;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
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
    padding: 10px 0 10px 0;
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

// useDarkMode.jsx setzt data-theme="dark" auf <html>, sobald der Dark Mode aktiv ist.
// Das Icon ist schwarz auf transparent - invert(1) dreht es auf Weiß, passend zur
// hellen Textfarbe im Dark Mode (robuster als eine CSS-mask mit externer SVG-URL,
// die je nach Browser nicht zuverlässig geladen wird)
export const SVGStyling = styled.img`
    width: 16px;
    padding-right: 4px;

    [data-theme="dark"] & {
        filter: invert(1);
    }
`

export const Tag = styled.a.attrs(() => ({
    className: 'link-bas',
}))`
`