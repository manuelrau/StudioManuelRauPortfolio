import React from 'react';
import { TagItem, Wrapper, Section } from './styles.jsx';

const Tags = ({ blok }) => {
    // Storyblok liefert Multi-Options-Felder als { value: [...] }, einfache Text-/Options-Felder
    // dagegen als rohen String/Array direkt auf blok.Tags - deshalb beide Formen abfangen
    const rawValue = blok?.Tags?.value ?? blok?.Tags;

    if (!rawValue) {
        return null;
    }

    const tagList = Array.isArray(rawValue)
        ? rawValue
        : String(rawValue).split(',').map(tag => tag.trim()).filter(Boolean);

    return (
        <>
            <Section>
                <p>Tags</p>
                <Wrapper>
                    {tagList.map((tag, index) => (
                        <TagItem key={`${tag}-${index}`}>{tag}</TagItem>
                    ))}

                </Wrapper>
            </Section>

        </>
    );
};

export default Tags;