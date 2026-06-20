export default function About({targetAboutSectionRef}) {
  return (
    <section id="about" className="about" ref={targetAboutSectionRef}>
      <div className="container">
        <div className="about-section">
          {/* <div className="about-image">
            <img src="/src/assets/img/myimg/fkr.jpg" alt="Fiker Habtamu" />
          </div> */}
          <div className="about-content">
            <h1>Hi, I'M FIKER</h1>
            <h3>FULL-STACK DEVELOPER</h3>
            <p>
              Welcome to my portfolio! I'm a Junior Full-Stack and React Developer
              passionate about building modern and user-friendly web applications.
              I work with HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap,
              Node.js, Express.js, MySQL, and RESTful APIs to create responsive,
              dynamic, and efficient web experiences.
            </p>
            <div className="btn-box">
              <a
                href="mailto:danathabtamu@gmail.com?subject=Let's Connect"
                className="btn-primary-custom"
              >
                Let's Talk
              </a>
              <a
                href="/assets/FikerHabtamuResumelast.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-custom"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
