export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Passionate full-stack developer with a strong focus on front-end
            development, shaped by diverse learning experiences.
          </p>
        </div>

        <div className="resume-grid">
          {/* LEFT COL */}
          <div>
            <p className="resume-col-title">Summary</p>

            <div className="resume-card">
              <h4>Fiker Habtamu</h4>
              <p>
                Skilled in HTML, CSS, JavaScript, jQuery, and React on the
                front-end, and Node.js / Express.js with MySQL and MongoDB on the
                back-end. I thrive on learning new things — each challenge sparks
                creativity to build something unique.
              </p>
              <ul style={{ marginTop: 10 }}>
                <li>Addis Ababa, Ethiopia</li>
                <li>+251 941 188 384</li>
                <li>danathabtamu@gmail.com</li>
              </ul>
            </div>

            <div className="resume-card">
              <h4>Intern — Prodigy InfoTech</h4>
              <p>
                Participated in a Web Development Internship covering responsive
                design, API integration, JavaScript algorithms, GitHub workflows,
                and more.
              </p>
            </div>
          </div>

          {/* RIGHT COL */}
          <div>
            <p className="resume-col-title">Educational Experience</p>

            <div className="resume-card">
              <h4>Full-Stack & React Developer — Evangadi</h4>
              <span className="date">April – September 2024</span>
              <ul>
                <li>
                  Front-end skills: <strong>HTML, CSS, JavaScript, Bootstrap, jQuery,
                  and React</strong> — building dynamic, visually stunning UIs.
                </li>
                <li>
                  Back-end: <strong>Node.js & Express.js</strong> for scalable
                  server-side apps; <strong>MySQL & MongoDB</strong> for data
                  management.
                </li>
                <li>
                  Gained invaluable soft skills: teamwork, collaboration, project
                  management, and time management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
