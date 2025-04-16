import styled  from "styled-components";

export const Wrapper = styled.div`
   display: flex;
    justify-content: space-between;
    margin: 20px 0 20px 0;
    font-size: 1.4em;
`
const getTagColor  = (tag) => {
    const tagColors = {
        Natur: '#459832',
        Stadt: '#FF5733',
        Urlaub: '#3366cc',
        Technik: '#9933ff',
        // weitere Tags...
    };
    return tagColors[tag] || '#000000';
}


export const Tag = styled.span`
  display: inline-block;
  background-color: #D6D6D6;
  color: ${({ selected,tag }) => (selected ? getTagColor (tag)  : '#000000')};
  padding: 6px 12px;
  margin: 4px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: monospace;
  font-style: ${({ selected }) => (selected ? 'italic' : 'normal')};
  font-size: 0.95rem;  
  cursor: pointer;
  transition: all 0.2s ease;
    
`