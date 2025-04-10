import styled from "styled-components";

export const CarouselContainer = styled.div`
 position: relative;
 width: 100%;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`
export const SliderWrapper = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: ${({count})=> count* 100}%;
    transform: translateX(${({ index}) => `-${index * (100 / count )}%`});
`

const Slide = styled.div`
    flex: 0 0  100%;
    img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
    }
`
const ArrowButton = styled.button`  
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    border-radius: 999px;
    padding: 8px;
    cursor: pointer;
    z-index: 1;
    &:hover {
        background: white;
    }

    ${({ left }) => left && `
    left: 10px;
  `}
    ${({ right }) => right && `
    right: 10px;
  `}
`