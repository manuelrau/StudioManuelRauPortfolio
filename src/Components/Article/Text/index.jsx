import React from 'react';
import {paragraphText, Wrapper} from "./styles.js";

const Text = ( story ) => {

    const rawData = story.story.content[0].content[0]

    console.log('rawTextData', rawData)


    return(
        <>
            <Wrapper>
                <paragraphText>{rawData.text}</paragraphText>
            </Wrapper>
        </>
    )
}

export default Text;