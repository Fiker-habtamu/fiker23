import { useState, useEffect } from "react";

const roles = [
  "FULL STACK DEVELOPER",
  "REACT DEVELOPER",
  "UX/UI Designer",
  "Back-end Developer",
];

export default function Hero({targetHeroSectionRef}) {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[currentRole];
    let timeout;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => {
          setDisplayed(target.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, currentRole]);

  return (
    <section id="hero" ref={targetHeroSectionRef}>
      <div className="hero-container" data-aos="fade-in">
        <h1>Fiker Habtamu</h1>
        <p>
          Hi, I'm{" "}
          <span className="typed-text">{displayed}</span>
        </p>
        <p>I build fast, responsive, and user-friendly websites that help businesses grow online.</p>
      </div>
    </section>
  );
}
