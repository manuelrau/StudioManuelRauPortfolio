import React from 'react';
import { TagItem, Wrapper } from './styles.jsx';

const Tags = ({ blok }) => {
    const rawValue = blok?.Tags?.value ?? blok?.Tags;

    if (!rawValue) {
        return null;
    }

    const tagList = Array.isArray(rawValue)
        ? rawValue
        : String(rawValue).split(',').map(tag => tag.trim()).filter(Boolean);

    return (
        <>
            <p>Tags</p>
            <Wrapper>
                {tagList.map((tag, index) => (
                    <TagItem key={`${tag}-${index}`}>{tag}</TagItem>
                ))}

            </Wrapper>
        </>
    );
};

export default Tags;