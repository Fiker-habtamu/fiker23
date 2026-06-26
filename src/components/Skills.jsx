import { skillsLeft, skillsRight } from "../data/dataSet";
import useReveal from "../hooks/useReveal";
import RotatedSkills from "./RotatedSkills/RotatedSkills";

function SkillBar({ label, icon }) {
  return (
    <div className="skill-item">
      <div className="skill-label">
        {icon && <i className={icon} />}
        {label}
      </div>
      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default function Skills({ targetSkillSectionRef }) {
  const { ref: revealRef, isVisible } = useReveal(0.1);

  return (
    <section
      id="skills"
      className="skills section-bg"
      ref={targetSkillSectionRef}
    >
      <div className="container">
        <div className="section-title">
          <h2 className="text-[41px]">Skills</h2>
          <p>
            Proficient in HTML, CSS, and JavaScript for building responsive,
            accessible web interfaces. Experienced with React, Bootstrap,
            Node.js, Express.js, MySQL, and MongoDB to deliver full-stack
            solutions.
          </p>
        </div>

        <div className={`skills-grid transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-x-10"
          }`} ref={revealRef}>
          {skillsLeft.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
          {skillsRight.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
        </div>

        {/* rotated skills */}

        <RotatedSkills />

        {/* Tech logo marquee */}
        <div className="skills-marquee">
          <div className="skills-track">
            {[
              "html.png",
              "images.png",
              "js.png",
              "jquery.png",
              "react.png",
              "nodejs-logo.svg",
              "teamwork.png",
              "express.png",
              "api.png",
              "sql.png",
              "git.webp",
              "bootstrap.jpg",
              /* duplicate for seamless loop */
              "html.png",
              "images.png",
              "js.png",
              "jquery.png",
              "react.png",
              "nodejs-logo.svg",
              "teamwork.png",
              "express.png",
              "api.png",
              "sql.png",
              "git.webp",
              "bootstrap.jpg",
            ].map((img, i) => (
              <img key={i} src={`../assets/img/Skills/${img}`} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
