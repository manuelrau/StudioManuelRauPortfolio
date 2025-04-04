import {AboutSection, Wrapper} from '../styles.js'
import Header from '../../Components/Header/index.jsx'
import Footer from "../../Components/Footer/index.jsx";
import { useStoryblok } from "@storyblok/react";
import { AboutPtag } from "../styles.js"
import React from "react";
import {GlobalStyle} from "../../styles.js";


const About = () => {
        const story = useStoryblok( "about", {version:"online"})
    console.log(story)
    if (!story.content) return <p>Laden...</p>;
       return (
           <>
               <GlobalStyle />
               <Wrapper>

                   <Header />
                   <AboutSection>
                       <AboutPtag>{story.content.Text.content[0].content[0].text}</AboutPtag>
                   </AboutSection>

                   <Footer />

               </Wrapper>
           </>

           )
    }


export default About;
