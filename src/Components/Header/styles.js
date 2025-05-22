import styled from "styled-components";

export const Header = styled.header.attrs(() => ({
    className: 'header',
}))`
    position: fixed;
    left: 70%;
    transform: translateX(-50%);
    top: 10px;
    border-radius: 5px;
    z-index: 1000;
    width: 50vw;
    background-color: oklab(0.96 0 0 / 0.7);
    backdrop-filter: blur(24px);

    &.orange {
        background: #FF926E; /* Überschreibe, wenn die Klasse "orange" vorhanden ist */
    }

    @media (max-width: 480px) {
        top: auto;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
            width: 75%;
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

        .LinkNameHeader{
           font-size: 0.95rem ;

        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: all 1s ease-in-out;
        
        .LinkNameHeader {
     
            font-size: 8rem;
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
    height: 2.55dvh;
    max-width: 100%;
    object-fit: cover;
    width: auto;

    @media (max-width: 1024px) {
        height: 2dvh;
    }

    @media (max-width: 768px) {
        height: 2.55dvh;
        padding: 5px 0 5px 10px;
    }
    @media (max-width: 480px) {
        height: 1.75dvh;
        justify-content: space-between;
        padding: 5px 5px 5px 15px;
    }
`
export const Burger = styled.img`
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    height: 3.6vh;
    width: auto;
    padding:10px;
    margin-right: 10px;

    @media (max-width: 768px) {
        height: 4vh;
    }
    @media (max-width: 480px) {
        height: 3.6vh;
    }
`

export const Close = styled.img`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background: #0000000a;
    border-radius: 50%;
    padding: 15px 10px;
    margin-right: 10px;
    transition: background .2s ease 0s;
    height: 3.6vh;
    width: auto;

    @media (max-width: 768px) {
        height: 4vh;
    }
    @media (max-width: 480px) {
        height: 3.6vh;
   
    }
    
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 20;
    
    @media (max-width: 768px) {
    display: flex;
}
    
`

export const HamburgerIcon = styled.svg`
    height: 3.6vh;
    width: auto;

    @media (max-width: 768px) {
        height: 4vh;
        padding:10px 20px;
    }
    @media (max-width: 480px) {
        height: 3.6vh;
        padding:0 20px;
    }
`
export const MenuDesktop = styled.div`
  display: flex;
  gap: 70px;
  padding: 0 30px 0 0px;

  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
  }
    @media (max-width: 1024px){
        gap: 30px;
    }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #D6D6D6;
    z-index: 999;
    transition: transform 0.4s ease;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  a {
    color: black;
    font-size: 2.25rem;
    transition: transform 0.4s ease;  
    text-decoration: none;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    display: none;
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
