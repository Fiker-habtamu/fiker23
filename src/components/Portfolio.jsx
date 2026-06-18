const projects = [
  {
    title: "Netflix Clone",
    description:
      "Built with React, fetching dynamic content from the TMDB API. Features smooth navigation, React Hooks, and Context API for efficient state management.",
    img: "./assets/img/portfolio/Netflex.jpg",
    url: "https://fiker-netflex-1.netlify.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "Full-stack clone using React and Node.js with a functional shopping cart, product listings, and seamless user interactions.",
    img: "./assets/img/portfolio/Amazon.jpg",
    url: "https://amazon-fiker.vercel.app/",
  },
  {
    title: "Evangadi Forum",
    description:
      "A Q&A platform similar to Stack Overflow, built with React, Node.js, and JWT for secure authentication and session management.",
    img: "./assets/img/portfolio/Forum.jpg",
    url: "https://evangadi-forum-fiker.netlify.app/",
  },
  {
    title: "3D Animation Gallery",
    description:
      "A curated collection of 3D animation artworks showcasing detailed modeling, realistic textures, and creative visual storytelling.",
    img: "./assets/img/portfolio/Fkrimg.png",
    url: "https://fkrimg.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            A series of clone projects replicating popular platforms — demonstrating
            my ability to integrate complex features while following best practices
            in both front-end and back-end development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={p.img} alt={p.title} />
              <div className="project-info">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <span className="project-link">
                  View live <i className="bx bx-link-external" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
