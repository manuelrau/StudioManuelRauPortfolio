import { Link, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState} from "react";
import {Wrapper, HeaderLogo, Header, Hamburger, Menu, Navigation, MenuDesktop, Burger} from './styles.js'
import { useStoryblok } from "@storyblok/react";


const HeaderBox = () => {
    const story = useStoryblok("header", {version: "draft"})
   const headerRef = useRef(null);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!story.content) return;
        const header = headerRef.current;
        console.log('HeaderRef:', header);
        if(!header) return;

        if(location.pathname ==="/about") {
            header.classList.add("orange");
        } else {
            header.classList.remove("orange");
        }
    }, [location, story.content])

    const getLinkClass = (link) => {
        return location.pathname === link ? 'LinkNameHeader visited' : 'LinkNameHeader';
    };


    if (!story.content) return <p>Laden...</p>;

    const link1Index = `/${story.content?.Body[0].Index.cached_url}`;
    const link2About = `/${story.content?.Body[0].Link.cached_url}`;

    return (
        <>
            <Header ref={headerRef}>


                <Wrapper>
                    <Navigation>

                        <Link to="/">
                            <HeaderLogo src={story.content?.Body[0].Logo.filename} />
                        </Link>

                        <MenuDesktop>
                            <Link
                                to={link1Index}
                                className={getLinkClass(link1Index)}
                            >
                                {story.content?.Body[0].Index.cached_url}
                            </Link>

                            <Link
                                to={link2About}
                                className={getLinkClass(link2About)}
                            >
                                {story.content?.Body[0].Link.cached_url}
                            </Link>
                        </MenuDesktop>

                        <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} >
                            <Burger src={story.content?.Body[0].Burger.filename}/>
                        </Hamburger>


                    </Navigation>

                </Wrapper>
            </Header>

            <Menu isOpen={isOpen} >
                <Link
                    to={link1Index}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClass(link1Index)}
                >
                    {story.content?.Body[0].Index.cached_url}
                </Link>

                <Link
                    to={link2About}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClass(link2About)}
                >
                    {story.content?.Body[0].Link.cached_url}
                </Link>
            </Menu>
        </>
    )
}

export default HeaderBox