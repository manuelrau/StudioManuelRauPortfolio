import Header from '../../Components/Header/index.jsx'
import Footer from "../../Components/Footer/index.jsx";
import { useStoryblok } from "@storyblok/react";
import {AboutPtag, AboutSection, CenterBox, Wrapper} from "./styles.js"
import React from "react";
import {FooterContainer, GlobalStyle} from "../../styles.js";


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
                       <CenterBox>
                           <h1>{story.content.Headline}</h1>
                           <AboutPtag>{story.content.Text.content[0].content[0].text}</AboutPtag>
                       </CenterBox>
                   </AboutSection>
               </Wrapper>
               <FooterContainer>
                   <Footer/>
               </FooterContainer>


           </>

       )
}


export default About;
