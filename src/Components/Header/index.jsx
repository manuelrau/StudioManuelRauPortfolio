import { Link, useLocation } from 'react-router-dom';
import { Wrapper, HeaderLogo, Header } from './styles.js'
import { useStoryblok } from "@storyblok/react";
import React, { useState } from "react";




const HeaderBox = () => {
    const story = useStoryblok("header", {version: "draft"})
    const location = useLocation(); // location.pathname = z.B. "/about"


    const getLinkClass = (link) => {
        return location.pathname === link ? 'LinkNameHeader visited' : 'LinkNameHeader';
    };


    if (!story.content) return <p>Laden...</p>;
    const link1Index = `/${story.content?.Body[0].Index.cached_url}`;
    const link2About = `/${story.content?.Body[0].Link.cached_url}`;
    return (
        <Header>

                <Wrapper>

                    <Link
                        to={link1Index}
                        className={getLinkClass(link1Index)}
                       >
                        {story.content?.Body[0].Index.cached_url}
                    </Link>


                    <Link to="/">
                        <HeaderLogo src={story.content?.Body[0].Logo.filename} />
                    </Link>

                    <Link
                        to={link2About}
                        className={getLinkClass(link2About)}
                        >
                        {story.content?.Body[0].Link.cached_url}
                    </Link>

                </Wrapper>
        </Header>
    )
}

export default HeaderBox