import React from "react";
import "./Footer.css";
import logo from "../Img/logo-web-png.png";
import ScrollReveal from "../Utilitarios/ScrollReveal";
import { useTranslation, Trans } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const topics = React.useMemo(() => [
    { name: "Inicio", index: "0", href: "#Inicio" },
    { name: "Curriculo", index: "1", href: "#Curriculo" },
    { name: "Sobre", index: "2", href: "#Sobre" },
    { name: "Skills", index: "3", href: "#Skills" },
  ], []);

  return (
    <ScrollReveal className="" id="Footer">
      <footer className="footer">
        <div className="footer-top">
          <h2>{t("footer.connect")}</h2>
          <a
            href="https://www.linkedin.com/in/tms5"
            target="_blank"
            rel="noreferrer"
            className="linkedin-btn"
          >
            Linkedin
          </a>
        </div>

        <hr />

        <div className="footer-content">
          <div className="footer-col">
            <div className="brand align-center">
              <div className="brand-logo">
                <img src={logo} alt="Logo Thamires Morais" width="20px" />
              </div>
            </div>
            <p>
              <Trans i18nKey="footer.description">
                Desenvolvendo interfaces que facilitam o dia a dia de quem usa e
                de quem mantém. Se tiver um projeto legal, vamos conversar.
              </Trans>
            </p>
          </div>

          <div className="footer-col">
            <strong className="pb-1r">{t("footer.navigation")}</strong>
            <ul>
              {topics.map(topic => (
                <li key={topic.index}>
                  <a href={topic.href} className="c-white">{t(topic.name)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <strong className="pb-1r">{t("footer.contact")}</strong>
            <ul>
              <li>thamiiresmorais2@gmail.com</li>
              <li>linkedin.com/in/tms5</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="footer-copy">{t("footer.copyright")}</p>
      </footer>
    </ScrollReveal>
  );
}