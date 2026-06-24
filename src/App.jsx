import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import { useRef } from "react";
import FeaturedProjects from "./components/FeaturedSection/Featured";
import Featured from "./components/FeaturedSection/Featured";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const targetHeroSectionRef = useRef(null);
  const targetProjectSectionRef = useRef(null);
  const targetAboutSectionRef = useRef(null);
  const targetSkillSectionRef = useRef(null);
  const targetServiceSectionRef = useRef(null);
  const targetContactSectionRef = useRef(null);

  // to handle hero section click
  const scrollToHeroSection = () => {
    if (targetHeroSectionRef.current) {
      targetHeroSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // to handle project section click
  const scrollToProjectSection = () => {
    if (targetProjectSectionRef.current) {
      targetProjectSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // to handle About section click
  const scrollToAboutSection = () => {
    if (targetAboutSectionRef.current) {
      targetAboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // to handle About section click
  const scrollToSkillSection = () => {
    if (targetSkillSectionRef.current) {
      targetSkillSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // to handle Service section click
  const scrollToServiceSection = () => {
    if (targetServiceSectionRef.current) {
      targetServiceSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // to handle Service section click
  const scrollToContactSection = () => {
    if (targetContactSectionRef.current) {
      targetContactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header
        activeSection={activeSection}
        scrollToHeroSection={scrollToHeroSection}
        scrollToProjectSection={scrollToProjectSection}
        scrollToAboutSection={scrollToAboutSection}
        scrollToSkillSection={scrollToSkillSection}
        scrollToServiceSection={scrollToServiceSection}
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
