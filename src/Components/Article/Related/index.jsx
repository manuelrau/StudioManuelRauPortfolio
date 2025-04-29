import React from 'react';
import {HeadlineTwo, Image, ImageWrapper, Text, TextWrapper, Wrapper} from "./styles.js";

const RelatedArticle = (story) => {

    const RawData = story.story;

    console.log('RawDataRelated:'+ RawData)

    return(
        <>
            <Wrapper>
                <HeadlineTwo>Other Projects</HeadlineTwo>
                <ImageWrapper>
                    <Image />
                </ImageWrapper>
                <TextWrapper>
                    <Text></Text>
                </TextWrapper>

            </Wrapper>




        </>
    )
}

export default RelatedArticle