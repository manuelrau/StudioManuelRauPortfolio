import React, {useEffect} from 'react';
import {TextStyle, Wrapper, Tag, LinkWrapper, SVGStyling, TextWrapper} from "./styles.js";
import {animate, stagger} from "motion";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({story, links}) => {

    console.log(story);
    const rawData = story.content[0]

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
    console.log("Data:", rawData)
    return(
        <TextWrapper>
            <Wrapper className="container-animate">
                <TextStyle>{render({type: 'doc', content:[rawData]})}</TextStyle>
            </Wrapper>
            {links?.cached_url ? (
            <LinkWrapper>
                <SVGStyling src="../../../public/lsicon_arrow-down-filled.svg" alt="Arrow horizontal"/>
                <Tag href={links?.cached_url} target={links?.target}>{links?.title}</Tag>
            </LinkWrapper>
            ) : null}

        </TextWrapper>
    )
}

export default Text;