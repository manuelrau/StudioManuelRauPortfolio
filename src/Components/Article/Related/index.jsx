import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import {HeadlineTwo, HeadlineFour, Image, ImageWrapper, Wrapper, Section, Component} from "./styles.js";

const RelatedArticle = ({story} ) =>  {

    // Shuffle-Funktion
    const getRandomTwo = (arr) => {
        return [...arr]
            .sort(() => Math.random() - 0.5) // mischt das Array
            .slice(0, 2); // nimmt nur zwei Einträge
    };

    const randomStories = getRandomTwo(story);


    return(

            <Wrapper>
                <HeadlineTwo>Other Projects</HeadlineTwo>
                <Section>
                {randomStories.map((story, i) => (

                        <Component>
                            <Link to={`/articles/${story.ArticlePage.slug.split('/').pop()}`}>
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