import styled from "styled-components";

export const TagItem = styled.p.attrs(() => ({
    className: 'tags',
}))`
    margin: 0 8px 8px 0;
    color: black;
    min-width: 48px;
    display: inline-block;
    padding: 8px 8px;
    background: rgba(251, 251, 251, 0.25);
    border-radius: 4px;
    display: inline-block;
`;

export const Wrapper = styled.div`
    display: inline-block;
    text-align: left;
`;

export const Section = styled.div`
    display: block;
    text-align: left;
`;