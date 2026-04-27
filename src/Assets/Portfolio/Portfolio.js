import { useTranslation } from "react-i18next";
import "./Portfolio.css";
import eduP from "./Arquivos/edu-p.png";
import agileDaily from "./Arquivos/agile-daily.png";

const projects = [
  {
    key: "edu_p",
    name: "edu-p",
    image: eduP,
    siteUrl: "https://edu-p.github.io/",
    codeUrl: "https://github.com/Edu-p/Edu-p.github.io",
    tags: ["Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    key: "agile_daily",
    name: "AgileDaily",
    image: agileDaily,
    siteUrl: "https://agile-daily.vercel.app/",
    codeUrl: "https://github.com/tms-5/interface-stopwatch",
    tags: ["Vue.js", "localStorage", "Agile"],
  },
];

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="portfolio-section container" id="Portfolio">
      <div className="section-card projects-card">
        <div className="section-heading">
          <p className="section-eyebrow">{t("portfolio.eyebrow")}</p>
        </div>

        <div className="project-grid project-grid--compact">
          {projects.map((project) => {
            const features = t(`portfolio.projects.${project.key}.features`, {
              returnObjects: true,
            });

            return (
              <article className="project-card" key={project.name}>
                <a
                  className="project-media"
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("portfolio.open_project", {
                    project: project.name,
                  })}
                >
                  <img
                    src={project.image}
                    alt={t("portfolio.project_preview", {
                      project: project.name,
                    })}
                  />
                </a>

                <div className="project-content d-flex direction-column gap-2">
                  <div className="d-flex direction-column gap-2">
                    <h3>{project.name}</h3>
                    <p>{t(`portfolio.projects.${project.key}.description`)}</p>
                    {Array.isArray(features) && features.length > 0 ? (
                      <ul className="project-features">
                        {features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    ) : null}
                    <div
                      className="project-tags"
                      aria-label={t("portfolio.tags_aria", {
                        project: project.name,
                      })}
                    >
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-footer">
                    <div className="project-actions">
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("portfolio.view_site")}
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("portfolio.code")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
