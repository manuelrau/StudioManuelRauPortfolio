import React, {useEffect} from 'react';
import {TextStyle, Wrapper, Tag, LinkWrapper, SVGStyling, TextWrapper, InfoText, Tags} from "./styles.js";
import {animate, stagger} from "motion";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({story, links, icon, Client, Services, Industire}) => {

    console.log(story);
    const rawData = story.content[0]  // Data um Texte zu bekommen und rendern
    const All = story;


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

    console.log("Client:", Client)
    console.log("Services", Services)
    console.log("Industrie:", Industire)
    return(
        <>
            <InfoText>

                <Tags> {Client.cached_url}</Tags>
                <Tags> {Industire.Industire}</Tags>
                <Tags> {Services.cached_url}</Tags>

            </InfoText>
            <TextWrapper>
                <Wrapper className="container-animate">
                    <TextStyle>{render({type: 'doc', content:[rawData]})}</TextStyle>
                </Wrapper>
                {links?.cached_url ? (

                    <LinkWrapper>
                        <SVGStyling src={icon.filename} alt="Arrow horizontal"/>
                        <Tag href={links?.cached_url} target={links?.target}>{links?.title}</Tag>
                    </LinkWrapper>
                ) : null}

            </TextWrapper>
        </>

    )
}

export default Text;