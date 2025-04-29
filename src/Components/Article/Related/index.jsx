import React from 'react';
import {HeadlineTwo, Wrapper} from "./styles.js";

const RelatedArticle = (story) => {

    const RawData = story.story;

    console.log('RawDataRelated:'+ RawData)

    return(
        <>
            <Wrapper>
                <HeadlineTwo>Random other Projects</HeadlineTwo>
            </Wrapper>


        </>
    )
}

export default RelatedArticle