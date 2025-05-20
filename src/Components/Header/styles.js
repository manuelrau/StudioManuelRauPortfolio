import styled from "styled-components";

export const Header = styled.header.attrs(() => ({
    className: 'header',
}))`
    position: fixed;
    top: 10px;
    border-radius: 5px;
    z-index: 1000;
    width: 95vw;
    background-color: oklab(0.96 0 0 / 0.7);
    backdrop-filter: blur(24px);

    &.orange {
        background: #FF926E; /* Überschreibe, wenn die Klasse "orange" vorhanden ist */
    }

    @media (max-width: 480px) {
            top: auto;
            bottom: 20px;
            width: 95%;
            margin-right: 10px;
        
    }
 `


export const Wrapper = styled.div `

    .LinkNameHeader {
        color: black;
        font-family: 'Lars Mono', monospace;
        padding: 40px 0 40px 0;
    }
    .LinkNameHeader.visited {
        text-decoration-line: underline;
        text-decoration-style: dotted;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 17.5%; /* 3.5px */
        text-underline-offset: 25%; /* 5px */
        text-underline-position: from-font;
        text-transform: uppercase;
    }
    
    width: 100%; 
    height: 100%;
    gap: 174px; 
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    
    @media (max-width: 1024px) {
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: all 1s ease-in-out;
        
        .LinkNameHeader {
     
            font-size: 10rem;
            margin-top: 50px;
            padding: 10px;
            max-width: 80%;
        }
    }
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-top: 5px;
        padding-bottom: 5px;
        
        .LinkNameHeader {
            font-size: 4rem;
        }
    }
`

export const HeaderLogo = styled.img`
    padding-left: 20px;
    height: 2.55vh;
    width: auto;
    color: oklch(0.2155 0.0182 255.72 / 0.5);

    @media (max-width: 1024px) {
        width: auto;
        height: 3vh;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 2.75vh;
        padding: 5px 0 5px 10px;
    }
    @media (max-width: 480px) {
        width: 100%;
        height: 2.1vh;
        justify-content: space-between;
        padding: 5px 5px 5px 15px;
    }
`
export const Burger = styled.img`
    height: 3.6vh;
    width: auto;

    @media (max-width: 768px) {
        height: 4vh;
        padding:10px 20px;
    }
    @media (max-width: 480px) {
        height: 4.2vh;
        padding:0 20px;
    }
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 20;
    
    
    ${({ isOpen }) =>  isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translateY(8px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-8px);
    }
  `};
    @media (max-width: 768px) {
    display: flex;
}
    
`
export const Menu = styled.div`
  display: flex;
  gap: 90px;
  padding: 0 20px 0 20px;  

  a {
      
    color: white;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #D6D6D6;  
    top: -10px;  
    left: 0;
      
    position: absolute;
    width: 100vw;  
    height: 100vh;  
    transition: transform 2s ease-in-out;
      
      
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    transform:  ${({ isOpen }) => (isOpen ? 'translate(0)' : 'translate(100%)')};
  }
  
  @media (max-width: 480px) {
      z-index: -1;
      top: -90vh;
      
    }
`;

export const Navigation = styled.nav.attrs(() => ({

}))`
    padding: 10px 0;
    width: 100%;
    height: 40px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

`

export const MenuTwo = styled.div`
    display: flex;
    gap: 20px;

    a {
        color: white;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        background: #D6D6D6;
        top: 40px;
        left: 0;

        position: absolute;
        width: 100vw;
        height: 100vh;

        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    }
`