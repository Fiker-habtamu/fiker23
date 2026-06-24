import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home/Home";
import EachProjects from "./pages/EachProjects/EachProjects";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const targetHeroSectionRef = useRef(null);
  const targetProjectSectionRef = useRef(null);
  const targetAboutSectionRef = useRef(null);
  const targetSkillSectionRef = useRef(null);
  const targetContactSectionRef = useRef(null);

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section[id]");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.4 },
  //   );
  //   sections.forEach((s) => observer.observe(s));
  //   return () => observer.disconnect();
  // }, []);

  const scrollToHeroSection = () =>
    targetHeroSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjectSection = () =>
    targetProjectSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToAboutSection = () =>
    targetAboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToSkillSection = () =>
    targetSkillSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContactSection = () =>
    targetContactSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Main Single Page View */}

        <Route
          path="/"
          element={
            <Home
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              targetHeroSectionRef={targetHeroSectionRef}
              targetProjectSectionRef={targetProjectSectionRef}
              targetAboutSectionRef={targetAboutSectionRef}
              targetSkillSectionRef={targetSkillSectionRef}
              targetContactSectionRef={targetContactSectionRef}
              scrollToHeroSection={scrollToHeroSection}
              scrollToProjectSection={scrollToProjectSection}
              scrollToAboutSection={scrollToAboutSection}
              scrollToSkillSection={scrollToSkillSection}
              scrollToContactSection={scrollToContactSection}
            />
          }
        />

        {/* Separate Sub-Pages for specific architectural branches */}
        <Route path="/projects/:category" element={<EachProjects />} />
      </Routes>
    </>
  );
}
