import { useState } from "react";
import { Link } from "react-router-dom";

// const navLinks = [
//   { href: "#hero", label: "Home", icon: "bx bx-home" },
//   { href: "#project", label: "Featured Works", icon: "bx bx-briefcase-alt-2" },
//   { href: "#about", label: "About", icon: "bx bx-user" },
//   { href: "#skills", label: "Skills", icon: "bx bx-file-blank" },
//   { href: "#portfolio", label: "Portfolio", icon: "bx bx-book-content" },
//   { href: "#contact", label: "Contact", icon: "bx bx-envelope" },
// ];

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
    {href: "#hero", click: scrollToHeroSection, label: "Home", icon: "bx bx-home" },
    {href: "#project",
      click: scrollToProjectSection,
      label: "Featured Works",
      icon: "bx bx-briefcase-alt-2",
    },
    {href: "#about", click: scrollToAboutSection, label: "About", icon: "bx bx-user" },
    {href: "#skills", click: scrollToSkillSection, label: "Skills", icon: "bx bx-file-blank" },
    { href: "#portfolio", 
      click: scrollToServiceSection,
      label: "Portfolio",
      icon: "bx bx-book-content",
    },
    {href: "#contact", click: scrollToContactSection, label: "Contact", icon: "bx bx-envelope" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  const bothFunctions = (justClick) => {
    handleNavClick();
    console.log(justClick)
  };

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
            <Link onClick={handleNavClick}>
              Fiker Habtamu
            </Link>
          </h1>
          <div className="social-links">
            <Link
              href="https://github.com/Fiker-habtamu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              href="https://www.instagram.com/fiker1699/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fiker-habtamu-15aa992b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin" />
            </Link>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            {navLinks.map(({ href,click, label, icon }) => (
              <li key={href}>
                <Link

                  className={activeSection === href.slice(1) ? "active" : ""}
                  onClick={()=>{handleNavClick();click()}}
                >
                  <i className={icon} />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
