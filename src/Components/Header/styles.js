import styled from "styled-components";

export const Header = styled.header.attrs(() => ({
    className: 'header',
}))`
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #D6D6D6;

    &.orange {
        background: #FF926E; /* Überschreibe, wenn die Klasse "orange" vorhanden ist */
    }

    @media (max-width: 480px) {
        header {
            position: static;
        }
    }
 `


export const Wrapper = styled.div `

    .LinkNameHeader {
        color: black;
        font-family: 'Lars Mono', monospace;
        padding: 0 40px 0 40px;
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
        
        .LinkNameHeader {
            padding: 40px;
            max-width: 100%;
            border-bottom: 2px solid black;
        }
    }
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`

export const HeaderLogo = styled.img`
    height: 3.2vh;
    width: auto;
    padding: 20px 0 20px 0;

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 10px 0 10px 0;
    }
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        padding: 10px 0 10px 0;
    }
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 20;
    
    span {
        height: 3px;
        width: 30px;
        background: black;
        margin: 5px 10px;
        transition: all 0.2s ease;
    }
    
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
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #D6D6D6;  
    top: 40px;  
    left: 20px;
      
    position: absolute;
    width: 100vw;  
    height: 50vh;
      
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export const Navigation = styled.nav.attrs(() => ({

}))`
    padding: 0 20px;
    width: 100%;
    height: 40px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

`