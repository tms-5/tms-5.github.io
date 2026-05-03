import { useState } from "react";
import SkillCards from "./SkillCards";
import ScrollReveal from "../../components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { UICard, UICarrousel } from "../../components/ui";

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
    <ScrollReveal className="h-[100svh] bg-mist pt-8" id="Skills">
      <div className="container p-8 text-center h-[stretch] align-content-center">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="m-0 text-sm font-extrabold uppercase tracking-[0.08em] text-orchid">
            {t("Skills")}
          </p>
        </div>
        <div className="flex items-center justify-between gap-8 [@media(max-width:1200px)]:flex-col">
          <div className="flex min-w-[250px] flex-col gap-6 text-left text-[1.2rem]">
            {Object.keys(skillsPages).map((area) => (
              <div
                key={area}
                className={`cursor-pointer transition duration-200 ${
                  area === selectedArea
                    ? "border-l-[3px] border-l-plum-700 pl-2 text-[2rem] font-bold text-plum-700 opacity-100"
                    : "opacity-60"
                }`}
                onClick={() => handleTabChange(area)}
              >
                {t(`skills.areas.${area}`)}
              </div>
            ))}
          </div>

          <div className="max-md:w-full">
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 max-md:py-6">
              <UICarrousel
                className="grid w-full grid-cols-[44px_minmax(0,auto)_44px] items-center gap-2 [@media(min-width:100px)]:flex-col] [@media(min-width:1201px)]:pl-[47px] py-6 max-md:grid-cols-2"
                contentClassName="contents"
                arrows="icons"
                page={page}
                totalPages={pages.length}
                previousLabel={t("skills.previous_page")}
                nextLabel={t("skills.next_page")}
                onPrevious={goToPreviousPage}
                onNext={goToNextPage}
              >
                <UICard
                  className={`relative flex min-h-[300px] min-w-[600px] flex-wrap items-center justify-center gap-3 [will-change:transform,opacity] max-md:col-span-full max-md:row-start-1 max-md:min-w-full ${
                    isSliding
                      ? slideDir === "right"
                        ? "animate-slide-out-left"
                        : "animate-slide-out-right"
                      : "animate-slide-in-right"
                  }`}
                  padding="sm"
                  variant="glass"
                >
                  <div className="grid w-full grid-cols-2 gap-4">
                    {pages[page]?.map((skill, i) => (
                      <SkillCards key={i} skill={skill} />
                    ))}
                  </div>
                </UICard>
              </UICarrousel>

              <div className="relative mt-4 flex justify-center gap-2">
                {pages.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2.5 cursor-pointer rounded-full transition duration-300 ${
                      i === page ? "w-6 bg-plum" : "w-2.5 bg-lavender-300"
                    }`}
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
