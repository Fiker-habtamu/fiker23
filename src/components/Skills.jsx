import { skillsLeft, skillsRight } from "../data/dataSet";
import useReveal from "../hooks/useReveal";
import RotatedSkills from "./RotatedSkills/RotatedSkills";

// 1. Import all image variables cleanly from your assets path
import img1 from "../assets/img/Skills/html.png";
import img2 from "../assets/img/Skills/images.png";
import img3 from "../assets/img/Skills/js.png";
import img4 from "../assets/img/Skills/jquery.png";
import img5 from "../assets/img/Skills/react.png";
import img6 from "../assets/img/Skills/teamwork.png";
import img7 from "../assets/img/Skills/nodejs-logo.svg";
import img8 from "../assets/img/Skills/express.png";
import img9 from "../assets/img/Skills/api.png";
import img10 from "../assets/img/Skills/sql.png";
import img_11 from "../assets/img/Skills/git.webp";
import img_12 from "../assets/img/Skills/bootstrap.jpg";

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
            {/* 2. Map through the verified variables array instead of raw strings */}
            {[
              img1, img2, img3, img4, img5, img7, img6, img8, img9, img10, img_11, img_12,
              /* duplicate for seamless loop */
              img1, img2, img3, img4, img5, img7, img6, img8, img9, img10, img_11, img_12
            ].map((imgVar, i) => (
              <img key={i} src={imgVar} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
