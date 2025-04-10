import Header from '../../Components/Header/index.jsx'
import Footer from "../../Components/Footer/index.jsx";
import { useStoryblok } from "@storyblok/react";
import {
    AboutPtag,
    AboutSection,
    CenterBox,
    Images,
    Container,
    Wrapper,
    Section,
    HeadlineH1,
    AboutText, HeadlineH3
} from "./styles.js"
import React, {useEffect} from "react";
import {FooterContainer, GlobalStyle} from "../../styles.js";


const About = () => {
        const story = useStoryblok( "about", {version:"online"})
    console.log(story)

    useEffect(() => {
        document.body.classList.add('orange')

        return () =>
            document.body.classList.remove('orange')
    }, []);
    if (!story.content) return <p>Laden...</p>;
       return (
           <>
               <GlobalStyle />
               <Wrapper>

                   <Header />
                   <AboutSection>
                       <CenterBox>
                           {story.content.body.map((section, index) => (
                               <div key={index}>
                                   {section.Headline && <HeadlineH1>{section.Headline}</HeadlineH1>}
                                   {section.Text?.content?.[0]?.content?.[0]?.text && (
                                       <AboutPtag>{section.Text.content[0].content[0].text}</AboutPtag>
                                   )}
                               </div>
                           ))}
                       </CenterBox>
                       <Section>
                       {story.content.body[1].OverviewComponent.map((section, index) => (

                               <Container key ={index}>

                                   {section.Headline && <HeadlineH3>{section.Headline}</HeadlineH3>}
                                   {section.Asset?.filename && (
                                       <Images src={section.Asset.filename} alt={section.Asset.alt} />
                                   )}
                                   {section.Text && (
                                       <AboutText>{section.Text}</AboutText>
                                   )}

                               </Container>
                       ))}
                       </Section>
                   </AboutSection>
               </Wrapper>
               <FooterContainer>
               <Footer/>
               </FooterContainer>


           </>

       )
}


export default About;
