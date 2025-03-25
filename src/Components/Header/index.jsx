import react from 'react';
import {H1, Wrapper} from './styles.js'
import { useStoryblok } from "@storyblok/react";


const Header = () => {
    const story = useStoryblok("category", {version: "draft"})

    return (
        <div>
            <Wrapper>
                <H1>Studio Manuel Rau </H1>
            </Wrapper>
        </div>
    )
}

export default Header