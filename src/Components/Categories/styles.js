import styled  from "styled-components";

export const Wrapper = styled.div`
   display: flex;
    justify-content: space-between;
    margin: 20px 0 20px 0;
    font-size: 1.4em;
`

const getTagColor = (tag) => {
    console.log('getTagColor called with:', tag);
    const tagColors = {
        Research: '#459832',
        Typefont: '#FF5733',
        Poster: '#3366cc',
        Digital: '#9933ff',
        Animation: '#f2f543',
        Website: '#002299',
        Branding: '#999077',
    };
    return tagColors[tag] || '#000000';
};


export const Tag = styled.span`
  display: inline-block;
  background-color: #D6D6D6;
  color: ${({ selected,tag }) =>
          (selected ? getTagColor(tag)  : '#123123')};
    
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