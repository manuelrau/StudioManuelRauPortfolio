import React from 'react';
import {
    Wrapper,
    Group,
    TagsHeadline,
    Tags,
    LinkWrapper,
    StyleLink,
    SVGStyling,
    Tag,
} from "./styles.js";
import TagsBlock from "../../Tags/index.jsx";

const formatDate = (datum) => {
    const date = new Date(datum);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const InformationBlock = ({ blok, tagsBlok }) => {

    return (
        <Wrapper>
            {blok?.Headline01 && (
                <Group>
                    <TagsHeadline>{blok.Headline01}</TagsHeadline>
                    {blok?.Client && <Tags>{blok.Client}</Tags>}
                </Group>
            )}
            {blok?.Datum && (
                <Group>
                    {/* Fällt auf "Datum" zurück, falls im Storyblok-Feld HeadlineDatum kein eigenes Label gesetzt wurde */}
                    <TagsHeadline>{blok.HeadlineDatum || "Datum"}</TagsHeadline>
                    <Tags>{formatDate(blok.Datum)}</Tags>
                </Group>
            )}
            {blok?.Link?.cached_url ? (
                <LinkWrapper>
                    <TagsHeadline>Link</TagsHeadline>
                    <StyleLink>
                        <SVGStyling src={blok?.Icon?.filename} alt="Arrow horizontal"/>
                        <Tag href={blok.Link.cached_url} target={blok.Link.target}>{blok.Link.title}</Tag>
                    </StyleLink>
                </LinkWrapper>
            ) : null}
            {tagsBlok && <TagsBlock blok={tagsBlok} />}
        </Wrapper>
    );
};

export default InformationBlock;