// src/pages/Home.jsx
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Featured from "../../components/FeaturedSection/Featured";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Resume from "../../components/Resume";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home({ 
  activeSection, scrollToHeroSection, scrollToProjectSection, 
  scrollToAboutSection, scrollToSkillSection, scrollToContactSection,
  targetHeroSectionRef, targetProjectSectionRef, targetAboutSectionRef,
  targetSkillSectionRef, targetContactSectionRef 
}) {
  return (
    <>
      <Header
        activeSection={activeSection}
        scrollToHeroSection={scrollToHeroSection}
        scrollToProjectSection={scrollToProjectSection}
        scrollToAboutSection={scrollToAboutSection}
        scrollToSkillSection={scrollToSkillSection}
        scrollToContactSection={scrollToContactSection}
      />
      <main>
        <Hero targetHeroSectionRef={targetHeroSectionRef}/>
        <Featured targetProjectSectionRef={targetProjectSectionRef}/>
        <About targetAboutSectionRef={targetAboutSectionRef}/>
        <Skills targetSkillSectionRef={targetSkillSectionRef}/>
        <Resume />
        <Portfolio />
        <Contact targetContactSectionRef={targetContactSectionRef} />
      </main>
      <Footer />
    </>
  );
}