import styled from "styled-components";

export const TagItem = styled.p.attrs(() => ({
    className: 'tags',
}))`
    margin: 0 8px 8px 0;
    padding: 8px 4px;
    background: #ECECEC;
    border-radius: 4px;
    display: inline-block;
`;