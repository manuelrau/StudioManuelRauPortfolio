import styled  from "styled-components";

export const Wrapper = styled.div`
   display: flex;
    font-size: 1.4em;
`

export const Tag = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  color: #333;
  padding: 6px 12px;
  margin: 4px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`