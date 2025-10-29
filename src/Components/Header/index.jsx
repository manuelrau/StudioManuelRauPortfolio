import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import React, { useRef, useEffect, useState} from "react";
import {Wrapper,
    HeaderLogo,
    Header,
    Hamburger,
    Menu,
    Navigation,
    MenuDesktop,
    Burger,
    Close,
    Button
} from './styles.js'
import useWindowSize  from "../../Hook/useWindowSize.jsx"
import {useStoryblokfetch} from "../../Hook/useStoryblokfetch.jsx";


const HeaderBox = () => {
    const headerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);



    const windowSize = useWindowSize();

    // Sprache
    const { lang } = useParams(); // Sprache aus der URL holen
    const activeLang = lang === "de" ? "de-de" : (lang || "en"); // Englisch als Fallback
    const { story, loading, error } = useStoryblokfetch("header", activeLang);
    const languages = ['de-de', 'en'];
    const currentLang = lang || 'de';
    // Header-Farbwechsel je nach Pfad
    useEffect(() => {

        if (!story?.content) return;
        const header = headerRef.current;
        if (!header) return;

        if (location.pathname.includes("/about")) {
            header.classList.add("orange");
        } else {
            header.classList.remove("orange");
        }
    }, [location, story]);

    // Dynamische Größenberechnung
    let value = 0.027;
    if (windowSize.width > 1024) value = 0.0269;
    else if (windowSize.width > 768) value = 0.02;
    else value = 0.0255;


// switchLangauge logik
    const switchLanguage = () => {
        const otherLang = languages.find(l => l !== currentLang);
        console.log(otherLang)
        const pathParts = location.pathname.split('/');
        pathParts[1] = otherLang; // Annahme: Sprachcode ist der zweite Teil der URL
        const newPath = pathParts.join('/');
        navigate(newPath);
    };


    const dynamicHeight = windowSize?.height ? `${windowSize?.height * value}px` : 'auto';

    if (!story?.content) return <p>Laden...</p>;

    // Sprachbezogene Links automatisch prependen (`/${lang}`)
    const linkPrefix = `/${lang}`;
    const linkHome = `${linkPrefix}/${story?.content.Body[0].Index.cached_url}`;
    const linkAbout = `${linkPrefix}/${story?.content.Body[0].Link.cached_url}`;

    if (loading) return <p>Laden...</p>;
    if (error) return <p>Fehler: {error.message}</p>;
    if (!story?.content) return <p>Kein Inhalt gefunden.</p>;

    return (
        <>
            <Header ref={headerRef}>


                <Wrapper>
                    <Navigation>

                        <Link to={`${linkPrefix}/`}>
                            <HeaderLogo src={story.content?.Body[0].Logo.filename}  alt={story.content?.Body[0].Logo.alt} calculatedHeight={dynamicHeight}  />
                        </Link>

                        <MenuDesktop>
                            <Button onClick={switchLanguage} >
                                {languages.find(l => l !== currentLang).split('-').pop().toUpperCase()}
                            </Button>
                            <Link
                                to={`/${lang}/${linkHome.split('/').pop()}`}
                                className={location.pathname === linkHome ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                            >
                                {story.content?.Body[0].Index.cached_url.split('/').pop()}
                            </Link>

                            <Link
                                to={`/${lang}/${linkAbout.split('/').pop()}`}
                                className={location.pathname === linkAbout ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                            >
                                {story.content?.Body[0].Link.cached_url.split('/').pop()}
                            </Link>
                        </MenuDesktop>

                        <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} >
                            <Burger isOpen={isOpen} src={story.content?.Body[0].Burger.filename} alt={story.content?.Body[0].Burger.alt}/>
                            <Close isOpen={isOpen} src={story.content?.Body[0].Close.filename} alt={story.content?.Body[0].Close.alt}/>
                        </Hamburger>


                    </Navigation>

                </Wrapper>
            </Header>

            <Menu isOpen={isOpen} >
                <Link
                    to={linkHome}
                    onClick={() => setIsOpen(false)}
                    className={location.pathname === linkHome ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                >
                    {story.content?.Body[0].Index.cached_url}
                </Link>

                <Link
                    to={linkAbout}
                    onClick={() => setIsOpen(false)}
                    className={location.pathname === linkAbout ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                >
                    {story.content?.Body[0].Link.cached_url}
                </Link>
            </Menu>
        </>
    )
}

export default HeaderBox