import React from 'react';
import {
    InfoText,
    TagsHeadline,
    Tags,
    LinkWrapper,
    StyleLink,
    SVGStyling,
    Tag,
} from "../Text/styles.js";

const formatDate = (datum) => {
    const date = new Date(datum);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const InformationBlock = ({ blok }) => {
    return (
        <InfoText>
            {blok?.Client && <Tags>{blok.Client}</Tags>}
            {blok?.Datum && <Tags>{formatDate(blok.Datum)}</Tags>}
            {blok?.Link?.cached_url ? (
                <LinkWrapper>
                    <TagsHeadline>Link</TagsHeadline>
                    <StyleLink>
                        <SVGStyling src={blok?.Icon?.filename} alt="Arrow horizontal"/>
                        <Tag href={blok.Link.cached_url} target={blok.Link.target}>{blok.Link.title}</Tag>
                    </StyleLink>
                </LinkWrapper>
            ) : null}
        </InfoText>
    );
};

export default InformationBlock;