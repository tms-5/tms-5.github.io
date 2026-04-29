import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UIButton, UICard, UICarrousel, UITag } from "../../components/ui";
import eduP from "../../Assets/Portfolio/Arquivos/edu-p.png";
import agileDaily from "../../Assets/Portfolio/Arquivos/agile-daily.png";
import ronaldoNutrii from "../../Assets/Portfolio/Arquivos/ronaldo-nutrii.png";

const DESKTOP_PROJECTS_PER_PAGE = 3;
const TABLET_PROJECTS_PER_PAGE = 2;
const MOBILE_PROJECTS_PER_PAGE = 1;

function getProjectsPerPage() {
  if (typeof window === "undefined") return DESKTOP_PROJECTS_PER_PAGE;

  if (window.matchMedia("(max-width: 999px)").matches) {
    return MOBILE_PROJECTS_PER_PAGE;
  }

  if (window.matchMedia("(max-width: 1199px)").matches) {
    return TABLET_PROJECTS_PER_PAGE;
  }

  return DESKTOP_PROJECTS_PER_PAGE;
}

const projects = [
  {
    key: "edu_p",
    name: "Portfolio Eduardo",
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
  {
    key: "ronaldo_nutrii",
    name: "Ronaldo Nutrii",
    image: ronaldoNutrii,
    siteUrl: "https://ronaldo-nutrii.vercel.app/",
    codeUrl: "https://github.com/tms-5/ronaldo-portfolio",
    tags: ["React", "Tailwind CSS", "Vercel"],
  },
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage);
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const pageStart = currentPage * projectsPerPage;
  const visibleProjects = projects.slice(
    pageStart,
    pageStart + projectsPerPage
  );

  useEffect(() => {
    const updateProjectsPerPage = () => {
      setProjectsPerPage(getProjectsPerPage());
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);

    return () => {
      window.removeEventListener("resize", updateProjectsPerPage);
    };
  }, []);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(totalPages - 1, 0)));
  }, [totalPages]);

  const goToPreviousPage = () => {
    setCurrentPage((page) => (page === 0 ? totalPages - 1 : page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => (page === totalPages - 1 ? 0 : page + 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section
      className="container flex min-h-[calc(100vh-50px)] items-center overflow-visible px-4 py-8"
      id="Portfolio"
    >
      <UICard className="w-full" padding="md">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="m-0 text-sm font-extrabold uppercase tracking-[0.08em] text-orchid">
            {t("portfolio.eyebrow")}
          </p>
        </div>

        <UICarrousel
          className="grid w-full grid-cols-[44px_minmax(0,1fr)_44px] items-center gap-3.5 max-md:grid-cols-2"
          contentClassName="contents"
          arrows="icons"
          page={currentPage}
          totalPages={totalPages}
          previousLabel={t("portfolio.previous_page")}
          nextLabel={t("portfolio.next_page")}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
        >
          <div className="col-start-2 grid gap-6 max-md:col-span-full max-md:row-start-1 min-[1000px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1200px]:justify-start">
            {visibleProjects.map((project) => {
              const features = t(`portfolio.projects.${project.key}.features`, {
                returnObjects: true,
              });

              return (
                <UICard
                  as="article"
                  className="flex h-full flex-col overflow-hidden"
                  padding="none"
                  variant="item"
                  interactive
                  key={project.name}
                >
                  <a
                    className="block h-[250px] overflow-hidden border-b border-lavender bg-neutral-950"
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("portfolio.open_project", {
                      project: project.name,
                    })}
                  >
                    <img
                      className="h-full w-full object-cover transition duration-300 hover:scale-105 hover:saturate-110"
                      src={project.image}
                      alt={t("portfolio.project_preview", {
                        project: project.name,
                      })}
                    />
                  </a>

                  <div className="flex h-full flex-col justify-between p-3 text-left">
                    <div className="flex flex-col gap-2">
                      <h3 className="m-0 text-lg font-extrabold leading-tight text-neutral-950">
                        {project.name}
                      </h3>
                      <p className="m-0 text-xs font-extrabold uppercase tracking-[0.08em] text-orchid">
                        {t(`portfolio.projects.${project.key}.date`)}
                      </p>
                      <div
                        className="my-2 flex w-full flex-wrap gap-2"
                        aria-label={t("portfolio.tags_aria", {
                          project: project.name,
                        })}
                      >
                        {project.tags.map((tag) => (
                          <UITag className="px-2.5" key={tag}>
                            {tag}
                          </UITag>
                        ))}
                      </div>
                      <p className="m-0 text-sm leading-relaxed text-slate-600">
                        {t(`portfolio.projects.${project.key}.description`)}
                      </p>
                      {Array.isArray(features) && features.length > 0 ? (
                        <ul className="mt-2 grid list-disc gap-1 pl-4 text-sm leading-relaxed text-slate-600 marker:text-plum">
                          {features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <div className="flex justify-end">
                      <div className="grid grid-cols-2 gap-2 max-[560px]:w-full max-[560px]:grid-cols-1">
                        <UIButton
                          as="a"
                          href={project.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("portfolio.view_site")}
                        </UIButton>
                        <UIButton
                          as="a"
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("portfolio.code")}
                        </UIButton>
                      </div>
                    </div>
                  </div>
                </UICard>
              );
            })}
          </div>
        </UICarrousel>

        <div
          className="relative mt-6 flex justify-center gap-2"
          aria-label={t("portfolio.pagination_aria")}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`h-2.5 cursor-pointer rounded-full border-0 p-0 transition duration-300 ${
                i === currentPage ? "w-6 bg-plum" : "w-2.5 bg-lavender-300"
              }`}
              type="button"
              aria-label={`${i + 1}/${totalPages}`}
              aria-current={i === currentPage ? "page" : undefined}
              onClick={() => goToPage(i)}
            />
          ))}
        </div>
      </UICard>
    </section>
  );
}
