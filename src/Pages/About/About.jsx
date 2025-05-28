import Header from '../../Components/Header/index.jsx'
import Footer from "../../Components/Footer/index.jsx";
import { useStoryblok } from "@storyblok/react";
import {
    AboutPtag,
    AboutSection,
    CenterBox,
    Images,
    Video,
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

        return () => {
            document.body.classList.remove('orange');
        }
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

    const content = story.content.body[1].OverviewComponent

       return (
           <>
               <GlobalStyle />
               <Wrapper>

                   <Header />
                   <AboutSection>
                       <CenterBox className="container-animate">
                           {story.content.body.map((section, index) => (
                               <div key={index}>
                                   {section.Headline &&
                                       <HeadlineH1>{section.Headline}</HeadlineH1>}
                                   {section.Text?.content?.[0]?.content?.[0]?.text && (
                                       <>
                                           <AboutPtag className="container-animate">{section.Text.content[0].content[0].text}</AboutPtag>
                                       </>
                                   )}
                               </div>
                           ))}
                       </CenterBox>
                       <Section>
                           {content.map((section, index) => {
                               console.log(section)
                               const filename = section?.Asset?.filename;
                               const isImage = /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(filename);
                               const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(filename);

                               if (isImage) {
                                   return (
                                       <Container key={index} className="container-animate">
                                           <HeadlineH3>{section.Headline}</HeadlineH3>
                                           <Images key={index} src={section?.Asset?.filename} />
                                           <AboutText>{section.Text}</AboutText>
                                       </Container>

                                   )
                               } else if(isVideo) {

                                   return (
                                       <Container key={index} className="container-animate">
                                           <HeadlineH3>{section.Headline}</HeadlineH3>
                                           <Video
                                               key={index}
                                               src={section?.Asset?.filename}
                                               autoPlay
                                               muted
                                               loop
                                               playsInline
                                           />
                                           <AboutText>{section.Text}</AboutText>
                                       </Container>
                                       )

                               }
                               <Container key={index} className="container-animate">
                                   <HeadlineH3>{section.Headline}</HeadlineH3>
                                   <AboutText>{section.Text}</AboutText>
                               </Container>
                           })}
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
