import { Link } from 'react-router-dom';
import { Wrapper, HeaderLogo, Header } from './styles.js'
import { useStoryblok } from "@storyblok/react";
import React from "react";


const HeaderBox = () => {
    const story = useStoryblok("header", {version: "draft"})
    console.log(story)
    if (!story.content) return <p>Laden...</p>;
    return (
        <Header>

                <Wrapper>
                    <Link to="/">
                        <HeaderLogo src={story.content?.Body[0].Logo.filename} />
                    </Link>

                    <Link to={`/${story.content?.Body[0].Link.cached_url}`} className="LinkNameHeader">{story.content?.Body[0].Link.cached_url}</Link>
                    <Link to={`/${story.content?.Body[0].Index.cached_url}`} className="LinkNameHeader">{story.content?.Body[0].Index.cached_url} </Link>
                </Wrapper>
        </Header>
    )
}

export default HeaderBox