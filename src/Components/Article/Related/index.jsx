import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {HeadlineTwo, HeadlineFour, Image, ImageWrapper, Wrapper, Section, Component} from "./styles.js";
import {animate, stagger} from "motion";

const RelatedArticle = ({story} ) =>  {

    const [randomStories, setRandomStories] = useState([]);

    console.log('Related Article:', story)

    useEffect(() => {
        // Stelle sicher, dass story ein Array ist und Elemente enthält
        if(story && Array.isArray(story) && story?.length > 0) {
            // Shuffle-Funktion
            const getRandomTwo = (arr) => {
                return [...arr]
                    .sort(() => Math.random() - 0.5) // mischt das Array
                    .slice(0, 2); // nimmt nur zwei Einträge
            };
            setRandomStories(getRandomTwo(story));
        } else {
            setRandomStories([]); // setze leere Array, wenn story ungültig
        }

    }, [story]);  // Nur neu mischen, wenn sich ` story `prop ändert


    useEffect(() => {
        if (!story || !story?.ArticlePage?.alt) {
            return; // Frühzeitiger Ausstieg, wenn keine Daten vorhanden sind
        }
        animate(
            ".container-animate",
            { opacity: [0, 1], y: [50, 0] },
            {
                delay: stagger(0.1),
                duration: 1.0,
                easing: "ease-in"
            }
        );
    }, [story]);

    if (!randomStories || randomStories?.length === 0) {
        // Optional: Ladezustand oder nichts anzeigen, wenn keine Stories da sind
        return <p>Loading article ...</p>
    }


    return(

            <Wrapper className="container-animate">
                <HeadlineTwo>Other Projects</HeadlineTwo>
                <Section>
                {randomStories.map((story, i) => (

                        <Component className="container-animate">
                            <Link to={`/articles/${story.ArticlePage.slug.split('/').pop()}`}
                                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <ImageWrapper>
                                    <Image key={i} src={story.ArticlePage.image} alt={story.ArticlePage.alt}/>
                                </ImageWrapper>
                                <HeadlineFour>{story.ArticlePage.title}</HeadlineFour>
                            </Link>
                        </Component>


                ))}
                </Section>
            </Wrapper>


    )
}

export default RelatedArticle