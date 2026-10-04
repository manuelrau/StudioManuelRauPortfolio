import React from 'react';
import { TagItem } from './styles.jsx';

const Tags = ({ blok }) => {
    const tagValue = blok?.Tags?.value ?? blok?.Tags;

    return (
        <TagItem>{tagValue}</TagItem>
    );
};

export default Tags;