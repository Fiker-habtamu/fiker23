const skillsLeft = [
  { label: "HTML", icon: "fab fa-html5" },
  { label: "CSS", icon: "fab fa-css3-alt" },
  { label: "JavaScript", icon: "fab fa-js" },
  { label: "API Integration", icon: null },
  { label: "MySQL & MongoDB", icon: null },
];

const skillsRight = [
  { label: "Bootstrap", icon: "fab fa-bootstrap" },
  { label: "React", icon: "fab fa-react" },
  { label: "UX/UI Design", icon: null },
  { label: "Node.js & Express.js", icon: "fab fa-node" },
  { label: "Teamwork", icon: null },
];

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

export default function Skills({targetSkillSectionRef}) {
  return (
    <section id="skills" className="skills section-bg" ref={targetSkillSectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Proficient in HTML, CSS, and JavaScript for building responsive,
            accessible web interfaces. Experienced with React, Bootstrap, Node.js,
            Express.js, MySQL, and MongoDB to deliver full-stack solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillsLeft.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
          {skillsRight.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
        </div>

        {/* Tech logo marquee */}
        <div className="skills-marquee">
          <div className="skills-track">
            {["html.png", "images.png", "js.png", "jquery.png", "react.png",
              "nodejs-logo.svg", "teamwork.png", "express.png", "api.png",
              "sql.png", "git.webp", "bootstrap.jpg",
              /* duplicate for seamless loop */
              "html.png", "images.png", "js.png", "jquery.png", "react.png",
              "nodejs-logo.svg", "teamwork.png", "express.png", "api.png",
              "sql.png", "git.webp", "bootstrap.jpg",
            ].map((img, i) => (
              <img key={i} src={`/src/assets/img/Skills/${img}`} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
