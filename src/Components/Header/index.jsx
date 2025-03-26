import react from 'react';
import {H1, Wrapper, HeaderLogo} from './styles.js'
import { useStoryblok } from "@storyblok/react";


const Header = () => {
    const story = useStoryblok("header", {version: "draft"})
    console.log(story)
    return (
        <header>
            <h1></h1>
            <div>
                <Wrapper>
                    <HeaderLogo src={story.content?.Body[0].Logo.filename}/>
                    <a href={story.content?.Body[0].Link.id}>{story.content?.Body[0].Link.cached_url}</a>
                </Wrapper>
            </div>
        </header>
    )
}

export default Header