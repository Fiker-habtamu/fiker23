import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({
  activeSection,
  scrollToHeroSection,
  scrollToProjectSection,
  scrollToAboutSection,
  scrollToSkillSection,
  scrollToServiceSection,
  scrollToContactSection,
}) {
  const navLinks = [
    {
      href: "#hero",
      click: scrollToHeroSection,
      label: "Home",
      icon: "bx bx-home",
    },
    {
      href: "#project",
      click: scrollToProjectSection,
      label: "Featured Works",
      icon: "bx bx-briefcase-alt-2",
    },
    {
      href: "#about",
      click: scrollToAboutSection,
      label: "About",
      icon: "bx bx-user",
    },
    {
      href: "#skills",
      click: scrollToSkillSection,
      label: "Skills",
      icon: "bx bx-file-blank",
    },
    {
      href: "#portfolio",
      click: scrollToServiceSection,
      label: "Portfolio",
      icon: "bx bx-book-content",
    },
    {
      href: "#contact",
      click: scrollToContactSection,
      label: "Contact",
      icon: "bx bx-envelope",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="sidebar">
      <div className="profile">
        <img src="/src/assets/img/myimg/fkr.jpg" alt="Fiker Habtamu" />
        <h1>
          <Link to="/" onClick={handleNavClick}>
            Fiker Habtamu
          </Link>
        </h1>
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ href, click, label, icon }) => (
            <li key={href}>
              <Link
                className={activeSection === href.slice(1) ? "active" : ""}
                onClick={() => {
                  handleNavClick();
                  click();
                }}
              >
                <i className={icon} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* <div className="social-links">
        <a
          href="https://github.com/Fiker-habtamu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.instagram.com/fiker1699/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/fiker-habtamu-15aa992b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin" />
        </a>
      </div> */}

      <button
        className="mobile-nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <i className={menuOpen ? "bx bx-x" : "bx bx-menu"} />
      </button>
    </header>
  );
}
