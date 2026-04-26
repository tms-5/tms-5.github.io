import { useState } from "react";
import "./Skills.css";
import SkillCards from "./SkillCards";
import ScrollReveal from "../Utilitarios/ScrollReveal";
import { useTranslation } from "react-i18next";

const skillsPages = {
  Development: [
    [
      { name: "JavaScript", icon: "js.png", level: 98, span: 2 },
      { name: "HTML", icon: "html.png", level: 99, span: 1 },
      { name: "CSS", icon: "css.png", level: 97, span: 1 },
      { name: "Jest", icon: "jest.png", level: 90, span: 1 },
      { name: "Sass", icon: "sass.png", level: 91, span: 1 },
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
  Design: [
    [
      { name: "Figma", icon: "figma.png", level: 92, span: 1 },
      { name: "Photoshop", icon: "ps.png", level: 70, span: 1 },
    ],
  ],
  Workflow: [
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
  const [selectedArea, setSelectedArea] = useState("Development");
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
                {area}
              </div>
            ))}
          </div>

          <div className="carousel-container">
            <div className="carousel-controls">
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
