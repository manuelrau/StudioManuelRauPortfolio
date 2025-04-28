import React from 'react';
import { Wrapper, ImageDefinition } from './styles.js'

const HeaderImage = (story) => {

    const rawData = story.story;
    console.log('rawData', rawData);

    return(
        <>
            <Wrapper>
                <ImageDefinition src={rawData.filename} alt={rawData.alt}/>
            </Wrapper>
        </>
    )
}

export default HeaderImage