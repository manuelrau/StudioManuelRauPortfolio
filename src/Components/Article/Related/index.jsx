import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import {HeadlineTwo, Image, ImageWrapper, Text, TextWrapper, Wrapper, Section, Component} from "./styles.js";

const RelatedArticle = ({story} ) =>  {

    // Shuffle-Funktion
    const getRandomTwo = (arr) => {
        return [...arr]
            .sort(() => Math.random() - 0.5) // mischt das Array
            .slice(0, 2); // nimmt nur zwei Einträge
    };

    const randomStories = getRandomTwo(story);


    console.log(JSON.stringify(story, null, 2))

    return(

            <Wrapper>
                <HeadlineTwo>Other Projects</HeadlineTwo>
                <Section>
                {randomStories.map((story, i) => (

                        <Component>
                            <Link to={story.ArticlePage.slug}>
                                <ImageWrapper>
                                    <Image key={i} src={story.ArticlePage.image} alt={story.ArticlePage.alt}/>
                                </ImageWrapper>
                                <p>{story.ArticlePage.title}</p>
                                <TextWrapper>
                                    <Text></Text>
                                </TextWrapper>
                            </Link>
                        </Component>


                ))}
                </Section>
            </Wrapper>


    )
}

export default RelatedArticle