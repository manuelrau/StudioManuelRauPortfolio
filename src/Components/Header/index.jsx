import react from 'react';
import {H1, Wrapper, HeaderLogo, Link} from './styles.js'
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
                    <Link href={story.content?.Body[0].Link.id}>{story.content?.Body[0].Link.cached_url}</Link>
                </Wrapper>
            </div>
        </header>
    )
}

export default Header