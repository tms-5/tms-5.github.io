import { useState } from "react";
import "./Skills.css";
import SkillCards from "./SkillCards";
import ScrollReveal from "../Utilitarios/ScrollReveal";
import { useTranslation } from "react-i18next";

const skillsPages = {
  development: [
    [
      { name: "JavaScript", icon: "js.png", level: 98, span: 2 },
      { name: "HTML", icon: "html.png", level: 99, span: 1 },
      { name: "CSS", icon: "css.png", level: 97, span: 1 },
      { name: "Jest", icon: "jest.png", level: 90, span: 1 },
      { name: "Sass", icon: "sass.png", level: 91, span: 1 },
      { name: "Tailwind CSS", icon: "tailwind.png", level: 92, span: 1 },
    ],
    [
      { name: "TypeScript", icon: "ts.png", level: 92, span: 2 },
      { name: "Vue", icon: "vue.png", level: 90, span: 1 },
      { name: "Node.js", icon: "nodejs.png", level: 82, span: 1 },
      { name: "React", icon: "react.png", level: 90, span: 2 },
    ],
    [
      { name: "Lit", icon: "lit.svg", level: 80, span: 1 },
      { name: "REST APIs", icon: "rest.png", level: 90, span: 1 },
      { name: "Storybook", icon: "storybook-icon.svg", level: 97, span: 1 },
      { name: "Wordpress", icon: "wordpress.png", level: 85, span: 1 },
      { name: "Svelte", icon: "svelte.png", level: 85, span: 2 },
    ],
  ],
  design: [
    [
      { name: "Figma", icon: "figma.png", level: 92, span: 1 },
      { name: "Photoshop", icon: "ps.png", level: 70, span: 1 },
    ],
  ],
  workflow: [
    [
      { name: "Git", icon: "git.png", level: 95, span: 2 },
      { name: "GitHub", icon: "github.png", level: 92, span: 1 },
      { name: "GitLab", icon: "gitlab.png", level: 80, span: 1 },
      { name: "Jira", icon: "jira.svg", level: 83, span: 1 },
      { name: "Trello", icon: "trello.png", level: 94, span: 1 },
    ],
  ],
};

export default function Skills() {
  const { t } = useTranslation();
  const [selectedArea, setSelectedArea] = useState("development");
  const [page, setPage] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDir, setSlideDir] = useState("right");

  const pages = skillsPages[selectedArea];

  function goToPage(newPage, dir = "right") {
    if (newPage === page) return;
    setSlideDir(dir);
    setIsSliding(true);
    setTimeout(() => {
      setPage(newPage);
      setIsSliding(false);
    }, 400);
  }

  function handleTabChange(area) {
    setSelectedArea(area);
    setPage(0);
  }

  function goToPreviousPage() {
    const nextPage = page === 0 ? pages.length - 1 : page - 1;
    goToPage(nextPage, "left");
  }

  function goToNextPage() {
    const nextPage = page === pages.length - 1 ? 0 : page + 1;
    goToPage(nextPage, "right");
  }

  return (
    <ScrollReveal className="font-barlow bg-gray" id="Skills">
      <div className="text-center d-grid p-2 container">
        <h2>{t("Skills")}</h2>
        <div className="skills-layout">
          <div className="skills-sidebar">
            {Object.keys(skillsPages).map((area) => (
              <div
                key={area}
                className={`skills-tab ${
                  area === selectedArea ? "active" : ""
                }`}
                onClick={() => handleTabChange(area)}
              >
                {t(`skills.areas.${area}`)}
              </div>
            ))}
          </div>

          <div className="carousel-container">
            <div className="carousel-controls">
              <div className="skills-carousel-stage">
                <button
                  className="skills-arrow-button"
                  type="button"
                  onClick={goToPreviousPage}
                  aria-label={t("skills.previous_page")}
                  disabled={pages.length <= 1}
                >
                  <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5a0d73"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></span>
                </button>

                <div
                  className={`glass-card-puzzle slide-anim ${
                    isSliding
                      ? slideDir === "right"
                        ? "slide-out-left"
                        : "slide-out-right"
                      : "slide-in"
                  }`}
                >
                  <div className="skills-grid">
                    {pages[page]?.map((skill, i) => (
                      <SkillCards key={i} skill={skill} />
                    ))}
                  </div>
                </div>

                <button
                  className="skills-arrow-button"
                  type="button"
                  onClick={goToNextPage}
                  aria-label={t("skills.next_page")}
                  disabled={pages.length <= 1}
                >
                  <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5a0d73"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span>
                </button>
              </div>

              <div className="carousel-indicators">
                {pages.map((_, i) => (
                  <span
                    key={i}
                    className={i === page ? "active" : ""}
                    onClick={() => goToPage(i, i > page ? "right" : "left")}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
