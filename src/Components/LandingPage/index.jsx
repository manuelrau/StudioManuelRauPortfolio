import React from 'react';
import Carousel from '../../Components/Carousel/index.jsx'
import {HeaderImage} from "./styles.js";

function LandingPage({ story }) {
    if (!story?.content) return <p>Laden...</p>;
    return(
            <>
                <div>
                    <HeaderImage>
                        <Carousel story={story} />
                    </HeaderImage>


                </div>
            </>
    )
}



export default LandingPage;