import styled from "styled-components";

export const TagItem = styled.p.attrs(() => ({
    className: 'tags',
}))`
    margin: 0 8px 8px 0;
    color: black;
    padding: 8px 4px;
    background: rgba(251, 251, 251, 0.25);
    border-radius: 4px;
    display: inline-block;
`;