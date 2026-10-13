import styled from "styled-components";

export const  DynamicStyledText = styled.h1.attrs(() => ({
    className: 'headline-h1'
}))`
    transition: font-weight 0.05s linear;
    font-weight: ${props => props.currentFontWeight};
    color: #000;
    margin:0;
    
    
    @media (max-width: 768px) {
        padding-left: 10px;
    }
`

export const ScrollPlaceholder = styled.div`
    height: 150vh; /* Genügend Höhe, um Scrollen zu ermöglichen */
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
`

