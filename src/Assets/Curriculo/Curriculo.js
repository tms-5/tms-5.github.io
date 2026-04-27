import "./Curriculo.css";
import TimeLine from "./TimeLine";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Curriculo() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const WorkExperience =
    t("curriculo.work_experience", { returnObjects: true }) || [];
  const visibleExperience = showAll ? WorkExperience : WorkExperience.slice(0, 2);

  return (
    <section className="experience-section container" id="Curriculo">
      <div className="section-card experience-card-section">
        <p className="section-eyebrow">{t("curriculo.eyebrow")}</p>
        <div className="d-flex flex-column align-items-center">
          {visibleExperience.map((item, index) => (
            <TimeLine
              key={index}
              index={index === visibleExperience.length - 1 ? -1 : index}
              isLast={index === visibleExperience.length - 1}
              company={item.company}
              position={item.position}
              date={item.date}
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
            <button
              className="experience-more-button"
              type="button"
              onClick={() => setShowAll((value) => !value)}
              aria-expanded={showAll}
            >
              {showAll ? t("curriculo.see_less") : t("curriculo.see_more")}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
