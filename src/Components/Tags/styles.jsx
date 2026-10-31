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
    text-align: center;

    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const Wrapper = styled.div`
    display: inline-block;
    text-align: left;

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
`;

export const Section = styled.div`
    display: block;
    text-align: left;
`;