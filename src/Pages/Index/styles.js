import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid black;
    justify-content: space-between;
`

export const Tags = styled.div.attrs(() => ({
    className: 'text-base',

}))`
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    white-space: nowrap;
    width: fit-content;
    display: flex;
    justify-content: end;
    align-items: center;
`