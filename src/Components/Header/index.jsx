import { Link, useLocation, useParams } from 'react-router-dom';
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
import useDarkMode from "../../Hook/useDarkMode.jsx";


const HeaderBox = () => {
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const navRef = useRef(null);

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);



    const windowSize = useWindowSize();
    const [theme, toggleTheme] = useDarkMode();

    // Sprache
    const { lang } = useParams(); // Sprache aus der URL holen
    const activeLang = lang === "de" ? "de-de" : (lang || "en"); // Englisch als Fallback
    const { story, loading, error } = useStoryblokfetch("header", activeLang);
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

    // Scrollen verhindern, solange das mobile Menü offen ist
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Header beim Runterscrollen ausblenden, beim Hochscrollen einblenden (nur mobile)
    useEffect(() => {
        if (windowSize.width > 768) {
            headerRef.current?.classList.remove('hidden');
            return;
        }

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const header = headerRef.current;
            if (!header || isOpen) return;

            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY;

            if (scrollingDown && currentScrollY > 50) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [windowSize.width, isOpen]);

    // Dynamische Größenberechnung
    let value = 0.027;
    if (windowSize.width > 1024) value = 0.0269;
    else if (windowSize.width > 768) value = 0.02;
    else value = 0.0255;


    const dynamicHeight = windowSize?.height ? `${windowSize?.height * value}px` : 'auto';

    if (loading || !story?.content) return <p>Laden...</p>;
    if (error) return <p>Fehler: {error.message}</p>;

    // Sprachbezogene Links automatisch prependen (`/${lang}`)
    const linkPrefix = `/${lang}`;
    const linkHome = `${linkPrefix}/${story.content.Body[0].Index.cached_url}`;
    const linkAbout = `${linkPrefix}/${story.content.Body[0].Link.cached_url}`;

    return (
        <>
            <Header ref={headerRef}>


                <Wrapper>
                    <Navigation ref={navRef}>

                        <Link to={`${linkPrefix}/`}>
                            <HeaderLogo ref={logoRef} src={story.content?.Body[0].Logo.filename}  alt={story.content?.Body[0].Logo.alt} calculatedHeight={dynamicHeight}  />
                        </Link>

                        <MenuDesktop>
                            <Button onClick={toggleTheme} >
                                {theme === 'dark' ? 'LIGHT' : 'DARK'}
                            </Button>
                            <Link
                                to={`/${lang}/${linkHome.split('/').pop()}`}
                                className={location.pathname === linkHome ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                            >
                                {story.content?.Body[0].IndexListe}
                            </Link>

                            <Link
                                to={`/${lang}/${linkAbout.split('/').pop()}`}
                                className={location.pathname === linkAbout ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                            >
                                {story.content?.Body[0].About}
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
                    to={`/${lang}/${linkHome.split('/').pop()}`}
                    onClick={() => setIsOpen(false)}
                    className={location.pathname === linkHome ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                >
                    {story.content?.Body[0].IndexListe}
                </Link>

                <Link
                    to={`/${lang}/${linkAbout.split('/').pop()}`}
                    onClick={() => setIsOpen(false)}
                    className={location.pathname === linkAbout ? 'LinkNameHeader visited' : 'LinkNameHeader'}
                >
                    {story.content?.Body[0].About}
                </Link>

                <Button onClick={toggleTheme} >
                    {theme === 'dark' ? 'LIGHT' : 'DARK'}
                </Button>

            </Menu>
        </>
    )
}

export default HeaderBox