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
        Research: '#FF46CA',
        Typefont: '#7DE274',
        Poster: '#FF9400',
        Digital: '#FFE204',
        Animation: '#FF6A3B',
        Website: '#0C6BED',
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
  font-weight: 500;
  font-family: Lars Mono, monospace;
  font-style: ${({ selected }) => (selected ? 'italic' : 'normal')};
  font-size: 1.05rem;  
  cursor: pointer;
  transition: all 0.2s ease;
    
`