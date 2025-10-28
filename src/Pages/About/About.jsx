import Header from '../../Components/Header/index.jsx'
import Footer from "../../Components/Footer/index.jsx";
import { useStoryblok } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import {
    AboutPtag,
    AboutSection,
    CenterBox,
    Images,
    Video,
    Container,
    Chapter,
    Wrapper,
    Section,
    HeadlineH1,
    AboutText, HeadlineH3
} from "./styles.js"
import React, {useEffect} from "react";
import {FooterContainer, GlobalStyle} from "../../styles.js";
import { animate, stagger  } from "motion"
import {useParams} from "react-router-dom";
import {useStoryblokfetch} from "../../Hook/useStoryblokfetch.jsx";




const About = () => {

    // Sprache
    const { lang } = useParams(); // Sprache aus der URL holen
    const activeLang = lang === "de" ? "de-de" : (lang || "en"); // Englisch als Fallback
    const { story, loading, error } = useStoryblokfetch("about", activeLang);
    console.log(story)

    useEffect(() => {
        document.body.classList.add('orange')

        return () => {
            document.body.classList.remove('orange');
        }
    }, []);

    useEffect(() => {
        if (!story?.content) return;
        animate(
            ".container-animate",
            { opacity: [0, 1], y: [40, 0] },
            {
                delay: stagger(0.15),
                duration: 0.6,
                easing: "ease-in"
            }
        );
    }, [story?.content]);

    if (!story?.content) return <p>Laden...</p>;
    if (loading) return <p>Laden...</p>;
    if (error) return <p>Fehler: {error.message}</p>;
    if (!story?.content) return <p>Kein Inhalt gefunden.</p>;

    const content = story?.content.body[1].OverviewComponent

       return (
           <>
               <GlobalStyle />
               <Wrapper>

                   <Header />
                   <AboutSection>
                       <CenterBox className="container-animate">
                           {story.content.body.map((section, index) => (
                               <Chapter key={index}>
                                   {section.Headline &&
                                       <HeadlineH1>{section.Headline}</HeadlineH1>}
                                   {section.Text?.content?.[0]?.content?.[0]?.text && (
                                       <>
                                           <AboutPtag className="container-animate">{render({ type: 'doc', content:[section.Text.content[0]]})}</AboutPtag>
                                       </>
                                   )}
                               </Chapter>
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
                                           <AboutText>{render({ type: 'doc', content:[section.Text.content[0]]})}</AboutText>
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
                                           <AboutText> {render({ type: 'doc', content:[section.Text.content[0]]})}</AboutText>
                                       </Container>
                                       )

                               }
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
