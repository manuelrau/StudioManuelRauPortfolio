import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    height: ${window.innerHeight*.8}px; /* oder eine andere Höhe, die du brauchst */
    
    margin: 60px 20px 0 20px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    
    @media (max-width: 1024px) {
        margin-top: 20px;
        
        height:  ${window.innerHeight*.8}px ;
    }
    
    
    @media (max-width: 480px) {
        margin: 20px 0 0 0;
        padding: 0 5px 20px 5px;
        width: 100%;
        height:  ${window.innerHeight - 20}px  ;
        box-sizing: border-box;
        
    }
`
export const ImageDefinition = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 5px;
    
    @media (max-width: 768px) {
        height: 85%;
        margin: 0;
        display: block;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        margin: 0;
    }
`