import styled  from "styled-components";

export const Wrapper = styled.div`
   display: flex;
    justify-content: space-between;
    margin: 20px 0 20px 0;
    font-size: 1.4em;
`

export const Tag = styled.span`
  display: inline-block;
  background-color: ${({ selected }) => (selected ? '#239' : '#f2f2f2')};
  color: #333;
  padding: 6px 12px;
  margin: 4px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: monospace;
  font-size: 0.8rem;  
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`