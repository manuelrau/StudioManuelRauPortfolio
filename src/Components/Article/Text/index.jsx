import React, {useEffect} from 'react';
import {
    TextStyle,
    Wrapper,
    Tag,
    LinkWrapper,
    SVGStyling,
    TextWrapper,
    InfoText,
    TagsHeadline,
    Tags,
    Wrapp,
    StyleLink
} from "./styles.js";
import {animate, stagger} from "motion";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({blok, links, icon, Client, Services, Industire}) => {

    const richText = blok?.InfoText;
    console.log("Zeige den Text an:", blok);

    useEffect(() => {
        if (!richText?.content?.length) return;
        animate(
            ".container-animate",
            { opacity: [0, 1], y: [50, 0] },
            {
                delay: stagger(0.1),
                duration: 1.0,
                easing: "ease-in"
            }
        );
    }, [richText]);

    console.log("blok:", blok)
    console.log("richText:", richText)
    console.log("Industire:", Industire)
    return(
        <Wrapp>
            <InfoText>
                <TagsHeadline>{Industire?.Headline01}</TagsHeadline>
                <Tags> {Client}</Tags>
                {links?.cached_url ? (
                    <LinkWrapper>
                        <TagsHeadline>Link</TagsHeadline>
                        <StyleLink>
                            <SVGStyling src={icon?.filename} alt="Arrow horizontal"/>
                            <Tag href={links?.cached_url} target={links?.target}>{links?.title}</Tag>
                        </StyleLink>
                    </LinkWrapper>
                ) : null}
            </InfoText>
            <TextWrapper>
                <Wrapper className="container-animate">
                    <TextStyle>{render(richText)}</TextStyle>
                </Wrapper>
            </TextWrapper>
        </Wrapp>

    )
}

export default Text;