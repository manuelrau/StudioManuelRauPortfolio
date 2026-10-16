import React from 'react';
import { TagItem } from './styles.jsx';

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
            {tagList.map((tag, index) => (
                <TagItem key={`${tag}-${index}`}>{tag}</TagItem>
            ))}
        </>
    );
};

export default Tags;