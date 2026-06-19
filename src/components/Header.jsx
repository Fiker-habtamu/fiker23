import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home", icon: "bx bx-home" },
  { href: "#about", label: "About", icon: "bx bx-user" },
  { href: "#skills", label: "Skills", icon: "bx bx-file-blank" },
  { href: "#portfolio", label: "Portfolio", icon: "bx bx-book-content" },
  { href: "#contact", label: "Contact", icon: "bx bx-envelope" },
];

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <button
        className="mobile-nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <i className={menuOpen ? "bx bx-x" : "bx bx-list-ul"} />
      </button>

      <header className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="profile">
          <img src="/src/assets/img/myimg/fkr.jpg" alt="Fiker Habtamu" />
          <h1>
            <a href="#hero" onClick={handleNavClick}>Fiker Habtamu</a>
          </h1>
          <div className="social-links">
            <a href="https://github.com/Fiker-habtamu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.instagram.com/fiker1699/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/fiker-habtamu-15aa992b4/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            {navLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? "active" : ""}
                  onClick={handleNavClick}
                >
                  <i className={icon} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
