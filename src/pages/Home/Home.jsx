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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home({
  activeSection,
  setActiveSection,
  scrollToHeroSection,
  scrollToProjectSection,
  scrollToAboutSection,
  scrollToSkillSection,
  scrollToContactSection,
  targetHeroSectionRef,
  targetProjectSectionRef,
  targetAboutSectionRef,
  targetSkillSectionRef,
  targetContactSectionRef,
}) {
  // Active section controller
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);
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
        <Hero targetHeroSectionRef={targetHeroSectionRef} />
        <Featured targetProjectSectionRef={targetProjectSectionRef} />
        <About targetAboutSectionRef={targetAboutSectionRef} />
        <Skills targetSkillSectionRef={targetSkillSectionRef} />
        <Resume />
        <Portfolio />
        <Contact targetContactSectionRef={targetContactSectionRef} />
      </main>
      <Footer />
    </>
  );
}
