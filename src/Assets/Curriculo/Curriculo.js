import "./Curriculo.css";
import TimeLine from "./TimeLine";
import { useTranslation } from "react-i18next";

export default function Curriculo() {
  const { t } = useTranslation();

  const WorkExperience =
    t("curriculo.work_experience", { returnObjects: true }) || [];

  return (
    <div className="bg-gray font-barlow text-center d-grid" id="Curriculo">
      <div className="container d-flex flex-column align-items-center justify-content-center g-2 p-3">
        <h2>{t("curriculo.title")}</h2>
        <div className="d-flex flex-column align-items-center">
          {WorkExperience.map((item, index) => (
            <TimeLine
              key={index}
              index={index === WorkExperience.length - 1 ? -1 : index}
              company={item.company}
              position={item.position}
              date={item.date}
              description={item.description}
            />
          ))}
          <div className="d-flex flex-column align-items-center justify-content-center button-curriculo">
            <a
              href={t("curriculo.link curriculo")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t("curriculo.download")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
