import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSiteSettings } from "../context/SiteSettings";

const links = [
  ["/", "Home"], ["/exams", "Exams"], ["/mock-tests", "Mock Tests"],
  ["/notes", "Notes"], ["/classes", "Classes"], ["/about", "About"], ["/contact", "Contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, theme, toggleLanguage, toggleTheme } = useSiteSettings();
  const closeMenu = () => setMenuOpen(false);

  return <>
    <div className="top-bar"><span className="top-bar-dot" /> New mock tests and exam updates every day <strong>— Your preparation, one platform.</strong></div>
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="logo-link" onClick={closeMenu} aria-label="Anitayan Classes home">
          <img className="brand-logo" src="/anitayan-classes-logo.jpeg" alt="Anitayan Classes — Ayush Sir" />
          <span className="logo-text">Anitayan Classes<small>LEARN · PRACTICE · ACHIEVE</small></span>
        </NavLink>
        <div className="nav-links">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>)}
          <a href="https://wa.me/919454064340" target="_blank" rel="noreferrer" className="nav-whatsapp">WhatsApp <span>↗</span></a>
        </div>
        <div className="nav-tools">
          <button className="utility-toggle language-toggle" onClick={toggleLanguage} aria-label="Change language">{language === "en" ? "हिंदी" : "EN"}</button>
          <button className="utility-toggle theme-toggle" onClick={toggleTheme} aria-label="Toggle colour theme" title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>{theme === "light" ? "☾" : "☀"}</button>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "✕" : "☰"}</button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="container">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"} onClick={closeMenu}>{label}</NavLink>)}
          <a href="https://wa.me/919454064340" target="_blank" rel="noreferrer" className="mobile-whatsapp">WhatsApp</a>
        </div>
      </div>
    </nav>
  </>;
}
export default Navbar;
