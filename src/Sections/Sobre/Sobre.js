import { useTranslation } from "react-i18next";
import ScrollReveal from "../Utilitarios/ScrollReveal";
import { UICard } from "../../components/ui";

const strengths = [
  {
    titleKey: "about.strengths.problem_solver.title",
    textKey: "about.strengths.problem_solver.text",
    icon: "M400-160h160v-160H400v160ZM160-400h160v-160H160v160Zm240 0h160v-160H400v160Zm240 0h160v-160H640v160Zm0-240h160v-160H640v160ZM320-80v-240H80v-320h480v-240h320v560H640v240H320Z",
  },
  {
    titleKey: "about.strengths.detail_oriented.title",
    textKey: "about.strengths.detail_oriented.text",
    icon: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
  },
  {
    titleKey: "about.strengths.always_learning.title",
    textKey: "about.strengths.always_learning.text",
    icon: "M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z",
  },
];

export default function Sobre() {
  const { t } = useTranslation();
  const aboutParagraphs = t("Sobre parte 1", { returnObjects: true });
  const paragraphs = Array.isArray(aboutParagraphs)
    ? aboutParagraphs
    : [aboutParagraphs];

  return (
    <ScrollReveal
      className="container flex min-h-[calc(100vh-50px)] items-center overflow-visible py-8"
      id="Sobre"
    >
      <UICard
        className="grid w-full items-center gap-8 p-8 lg:grid-cols-[0.9fr_1fr_0.95fr] lg:p-16"
        padding="none"
      >
        <div className="about-copy">
          <p className="about-kicker mb-4 text-sm font-extrabold uppercase tracking-[0.08em] text-orchid">
            {t("about.eyebrow")}
          </p>
          <h2
            className="about-title m-0 text-3xl overflow-hidden font-extrabold leading-tight text-neutral-950 [&_span]:text-plum-700 md:text-[2.4rem]"
            dangerouslySetInnerHTML={{ __html: t("about.title") }}
          />
        </div>

        <div className="about-body flex flex-col gap-4 text-base leading-relaxed text-slate-700">
          {paragraphs.map((paragraph) => (
            <p className="m-0" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-5 about-strength">
          {strengths.map((item, index) => (
            <article
              className=" grid grid-cols-[48px_1fr] items-start gap-4"
              key={item.titleKey}
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <span className="about-strength-icon grid h-12 w-12 place-items-center rounded-xl bg-lavender-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="currentColor"
                  className="text-plum-700"
                  aria-hidden="true"
                >
                  <path d={item.icon} />
                </svg>
              </span>
              <div>
                <h3 className="mb-1 text-base font-extrabold text-neutral-950">
                  {t(item.titleKey)}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-slate-700">
                  {t(item.textKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </UICard>
    </ScrollReveal>
  );
}
