import React, {useEffect} from 'react';
import {TextStyle, Wrapper, Tag, LinkWrapper, SVGStyling, TextWrapper} from "./styles.js";
import {animate, stagger} from "motion";

const Text = ({story, links}) => {

    console.log(story);
    const rawData = story.content[0].content[0]

    console.log('rawTextData', rawData)

    useEffect(() => {
        if (!rawData || !rawData.text) {
            return; // Frühzeitiger Ausstieg, wenn keine Daten vorhanden sind
        }
        animate(
            ".container-animate",
            { opacity: [0, 1], y: [50, 0] },
            {
                delay: stagger(0.1),
                duration: 1.0,
                easing: "ease-in"
            }
        );
    }, [rawData]);

    console.log("Links:", links)
    return(
        <TextWrapper>
            {links?.cached_url ? (
            <LinkWrapper>
                <SVGStyling src="../../../public/lsicon_arrow-down-filled.svg" alt="Arrow horizontal"/>
                <Tag href={links?.cached_url} target={links?.target}>{links?.title}</Tag>
            </LinkWrapper>
            ) : null}
            <Wrapper className="container-animate">
                <TextStyle>{rawData.text}</TextStyle>
            </Wrapper>

        </TextWrapper>
    )
}

export default Text;