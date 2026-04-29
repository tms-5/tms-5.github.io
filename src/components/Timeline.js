import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UITag } from "./ui";

export default function TimeLine({
  isLast = false,
  position,
  period,
  duration,
  description,
  meta,
  location,
  topics,
  skills,
  skillsPreviewCount = 2,
}) {
  const { t } = useTranslation();
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(true);

  const topicList = Array.isArray(topics) && topics.length > 0 ? topics : null;
  const skillList = Array.isArray(skills) ? skills.filter(Boolean) : [];
  const preview = Math.max(0, Math.min(skillsPreviewCount, skillList.length));
  const hiddenSkillCount = skillList.length - preview;
  const visibleSkills = skillsExpanded ? skillList : skillList.slice(0, preview);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex w-full justify-center overflow-visible transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grid w-full max-w-[760px] grid-cols-[22px_1fr] gap-5 overflow-visible md:grid-cols-[150px_22px_1fr] md:gap-8">
        <div className="hidden text-right md:block">
          <h2 className="text-base font-extrabold text-neutral-950">
            {position}
          </h2>
          <p className="my-1 text-sm text-lavender-700">{period}</p>
          <p className="mt-0.5 text-xs text-lavender-500">{duration}</p>
        </div>

        <div className="flex min-w-[22px] flex-col items-center overflow-visible">
          <div className="mb-1 h-[22px] w-[22px] rounded-full bg-lavender-200 shadow-[inset_0_0_0_5px_#5a0d73]" />
          {!isLast ? (
            <div className="h-full min-h-24 w-px border-l-2 border-solid border-lavender-300" />
          ) : null}
        </div>

        <div className="min-w-0 overflow-visible pb-8 text-left">
          <div className="mb-3 md:hidden">
            <h2 className="text-base font-extrabold text-neutral-950">
              {position}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{period}</p>
            <p className="mt-0.5 text-xs font-bold text-orchid">{duration}</p>
          </div>

          {meta || location ? (
            <p className="mb-2 mt-1 text-sm font-bold text-slate-500">
              <span>{meta}</span>
              {meta && location ? " · " : ""}
              <span>{location}</span>
            </p>
          ) : null}

          {topicList ? (
            <ul className="my-3 list-inside list-disc overflow-visible pl-0 text-left text-[0.95rem] leading-relaxed text-slate-600 marker:text-plum">
              {topicList.map((line, i) => (
                <li className="mb-2 pl-1" key={i}>
                  {line}
                </li>
              ))}
            </ul>
          ) : description ? (
            <p className="text-slate-600">{description}</p>
          ) : null}

          {skillList.length > 0 ? (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {visibleSkills.map((skill, i) => (
                <UITag
                  key={`${skill}-${i}`}
                  variant="slate"
                  className="font-medium"
                >
                  {skill}
                </UITag>
              ))}
              {!skillsExpanded && hiddenSkillCount > 0 ? (
                <UITag
                  as="button"
                  variant="dashed"
                  className="font-medium"
                  onClick={() => setSkillsExpanded(true)}
                  aria-expanded={false}
                  aria-label={t("curriculo.skills_show_more_aria", {
                    count: hiddenSkillCount,
                  })}
                >
                  {t("curriculo.skills_more", { count: hiddenSkillCount })}
                </UITag>
              ) : null}
              {skillsExpanded && hiddenSkillCount > 0 ? (
                <UITag
                  as="button"
                  variant="dashed"
                  className="border-solid font-medium"
                  onClick={() => setSkillsExpanded(false)}
                  aria-expanded
                  aria-label={t("curriculo.skills_show_less_aria")}
                >
                  {t("curriculo.skills_less")}
                </UITag>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
