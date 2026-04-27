import React, { useEffect, useMemo, useState } from "react";
import "./Topbar.css";
import ChangeLanguage from "./Components/ChangeLanguage";
import logo from "../Img/logo-web-png.png";
import { useTranslation } from "react-i18next";

export default function Topbar() {
  const { t } = useTranslation();
  const [activeHref, setActiveHref] = useState("#Inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topics = useMemo(
    () => [
      { name: "Inicio", href: "#Inicio" },
      { name: "Curriculo", href: "#Curriculo" },
      { name: "Sobre", href: "#Sobre" },
      { name: "Portfolio", href: "#Portfolio" },
      { name: "Skills", href: "#Skills" },
      { name: "Contato", href: "#Contato" },
    ],
    []
  );

  useEffect(() => {
    if (!window.location.hash || window.location.hash === "#") {
      window.location.hash = "#Inicio";
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    function updateActiveLink() {
      let nextActive = "#Inicio";
      const offsetTop = 140;

      topics.forEach((topic) => {
        const section = document.querySelector(topic.href);
        if (!section) return;

        if (section.getBoundingClientRect().top <= offsetTop) {
          nextActive = topic.href;
        }
      });

      setActiveHref(nextActive);
    }

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, [topics]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="portfolio-header">
      <nav className="portfolio-nav container" aria-label={t("nav.aria")}>
        <a className="brand-link" href="#Inicio" aria-label={t("nav.brand_aria")} onClick={closeMenu}>
          <img src={logo} alt="Logo Thamires Morais" width="116" height="36" />
        </a>

        <div className="mobile-actions">
          <ChangeLanguage />

          <button
            className="menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label={isMenuOpen ? t("nav.close_menu") : t("nav.open_menu")}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
          </button>
        </div>

        <div id="main-menu" className={`nav-panel ${isMenuOpen ? "open" : ""}`}>
          {topics.map((topic) => (
            <a
              key={topic.href}
              className={`nav-link ${activeHref === topic.href ? "active" : ""}`}
              href={topic.href}
              aria-current={activeHref === topic.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {t(topic.name)}
            </a>
          ))}
        </div>

        <div className="desktop-actions">
          <ChangeLanguage />
          <a className="talk-button" href="#Contato">
            {t("Contato")}
          </a>
        </div>
      </nav>
    </header>
  );
}
