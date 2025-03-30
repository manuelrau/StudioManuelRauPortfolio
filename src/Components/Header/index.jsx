import { Link } from 'react-router-dom';
import {H1, Wrapper, HeaderLogo, } from './styles.js'
import { useStoryblok } from "@storyblok/react";
import React from "react";


const Header = () => {
    const story = useStoryblok("header", {version: "draft"})
    console.log(story)
    if (!story.content) return <p>Laden...</p>;
    return (
        <header>
            <h1></h1>
            <div>
                <Wrapper>
                    <Link to="/">
                        <HeaderLogo src={story.content?.Body[0].Logo.filename} />
                    </Link>

                    <Link to={`/${story.content?.Body[0].Link.cached_url}`}>{story.content?.Body[0].Link.cached_url}</Link>
                </Wrapper>
            </div>
        </header>
    )
}

export default Header