import { useTranslation } from "react-i18next";
import profilepic from "../../Assets/Img/IMG_7874.png";
import "./Sobre.css";
import ScrollReveal from "../Utilitarios/ScrollReveal";

export default function Sobre() {
  const { t } = useTranslation();
  return (
    <ScrollReveal
      className="font-barlow text-center h-100v d-grid p-2 container sobre-section"
      id="Sobre"
    >
      <div className="d-flex text-start w-75 g-2 c-white m-auto">
        <div className="f-1-2 text-center p-2r p-relative img-sobre h-fit animated-left">
          <img src={profilepic} alt="Thamires Morais" id="img-2" />
          <div className="background-pic"></div>
        </div>
        <div className="animated-right">
          <div className="c-gray">
            <h2 className="f-2-5 mb-3">{t("Sobre")}</h2>
            <p>{t("Sobre parte 1")}</p>
          </div>
          <div className="formacao mt-3 text-start">
            <h4 className="formacao-titulo f-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#3E0052"
              >
                <path d="M840-320v-236L518-381q-18 10-38 10t-38-10L104-565q-11-6-15.5-15T84-600q0-11 4.5-20t15.5-15l338-184q9-5 18.5-7.5T480-829q10 0 19.5 2.5T518-819l381 208q10 5 15.5 14.5T920-576v256q0 17-11.5 28.5T880-280q-17 0-28.5-11.5T840-320ZM442-141 242-249q-20-11-31-30t-11-41v-152l242 131q18 10 38 10t38-10l242-131v152q0 22-11 41t-31 30L518-141q-9 5-18.5 7.5T480-131q-10 0-19.5-2.5T442-141Z" />
              </svg>{" "}
              {t("Formação")}
            </h4>
            <p className="formacao-texto">
             {t("Formação description")} <br /> 
             {t("Formação UFPE")}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
