import "./Inicio.css";
import profilepic from "../../Assets/Img/IMG_7997.png";
import { useTranslation } from "react-i18next";

export default function Inicio() {
  const { t } = useTranslation();
  const pdfPath = "/CV/CV-Thamires-Morais.pdf";

  return (
    <section className="inicio portfolio-hero container" id="Inicio">
      <div className="hero-copy">
        <p className="hero-eyebrow">{t("inicio.hello")}</p>
        <h1>
          <span>Thamires</span>
        </h1>
        <h2 dangerouslySetInnerHTML={{ __html: t("inicio.headline") }} />
        <p className="hero-description">{t("inicio.description")}</p>

        <div className="hero-actions">
          <a className="hero-button primary" href="#Portfolio">
            {t("inicio.view_projects")}
          </a>
          <a
            className="hero-button secondary"
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("inicio.view_cv")}
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Thamires Morais">
        <div className="hero-blob"></div>
        <div className="hero-dots hero-dots-top"></div>
        <div className="hero-dots hero-dots-bottom"></div>
        <svg className="hero-spark" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M19 13c9 12 17 20 30 29" />
          <path d="M13 31c8 2 15 5 22 10" />
          <path d="M35 7c2 8 5 15 11 21" />
        </svg>
        <img src={profilepic} alt="Thamires Morais" className="img-perfil" />
        <div className="experience-card">
          <span className="experience-icon" aria-hidden="true">★</span>
          <strong>{t("inicio.years")}</strong>
          <small>{t("inicio.experience")}</small>
        </div>
      </div>
    </section>
  );
}
