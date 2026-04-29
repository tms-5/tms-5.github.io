import TimeLine from "../../components/Timeline";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { UIButton, UICard } from "../../components/ui";

export default function Curriculo() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const WorkExperience =
    t("curriculo.work_experience", { returnObjects: true }) || [];
  const visibleExperience = showAll ? WorkExperience : WorkExperience.slice(0, 2);

  return (
    <section className="container overflow-visible p-8" id="Curriculo">
      <UICard padding="lg" variant="section">
        <p className="mb-7 text-left text-sm font-extrabold uppercase tracking-[0.08em] text-orchid">
          {t("curriculo.eyebrow")}
        </p>
        <div className="flex flex-col items-stretch">
          {visibleExperience.map((item, index) => (
            <TimeLine
              key={index}
              index={index === visibleExperience.length - 1 ? -1 : index}
              isLast={index === visibleExperience.length - 1}
              company={item.company}
              position={item.position}
              period={item.period}
              duration={item.duration}
              description={item.description}
              meta={item.meta}
              location={item.location}
              topics={item.topics}
              skills={item.skills}
              linkedinNote={item.linkedinNote}
              skillsPreviewCount={item.skillsPreviewCount ?? 2}
            />
          ))}
          {WorkExperience.length > 2 ? (
            <UIButton
              className="mx-auto mt-5"
              size="md"
              onClick={() => setShowAll((value) => !value)}
              aria-expanded={showAll}
              variant="outline"              
            >
              {showAll ? t("curriculo.see_less") : t("curriculo.see_more")}
            </UIButton>
          ) : null}
        </div>
      </UICard>
    </section>
  );
}
