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
import  {useEffect} from "react";
import {FooterContainer, GlobalStyle} from "../../styles.js";
import { animate, stagger  } from "motion"


const About = () => {
        const story = useStoryblok( "about", {version:"online"})
    console.log(story)

    useEffect(() => {
        document.body.classList.add('orange')

        return () =>
            document.body.classList.remove('orange')
    }, []);

    useEffect(() => {
        if (!story.content) return;
        animate(
            ".container-animate",
            { opacity: [0, 1], y: [40, 0] },
            {
                delay: stagger(0.15),
                duration: 0.6,
                easing: "ease-in"
            }
        );
    }, [story.content]);

    if (!story.content) return <p>Laden...</p>;

       return (
           <>
               <GlobalStyle />
               <Wrapper>

                   <Header />
                   <AboutSection>
                       <CenterBox className="container-animate">
                           {story.content.body.map((section, index) => (
                               <div key={index}>
                                   {section.Headline && <HeadlineH1>{section.Headline}</HeadlineH1>}
                                   {section.Text?.content?.[0]?.content?.[0]?.text && (
                                       <AboutPtag className="container-animate">{section.Text.content[0].content[0].text}</AboutPtag>
                                   )}
                               </div>
                           ))}
                       </CenterBox>
                       <Section>
                           {story.content.body[1].OverviewComponent.map((section, index) => (

                               <Container key={index} className="container-animate">

                                   {section.Headline && <HeadlineH3>{section.Headline}</HeadlineH3>}
                                   {section.Asset?.filename && (
                                       <Images src={section.Asset.filename} alt={section.Asset.alt}/>
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
