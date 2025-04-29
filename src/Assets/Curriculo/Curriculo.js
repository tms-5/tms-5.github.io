import React, { useState } from "react";
import "./Curriculo.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressBar } from "react-bootstrap";
import PDF from "./CV-Thamires-Morais.pdf";
import { useTranslation } from "react-i18next";

export default function Curriculo() {
  const { t } = useTranslation();
  const [habilidades] = useState([
    { nome: "HTML 5", porcentagem: "100" },
    { nome: "CSS 3", porcentagem: "90" },
    { nome: "JavaScript/Jquery", porcentagem: "90" },
    { nome: "UI Design", porcentagem: "85" },
    { nome: "Git/GitHub", porcentagem: "83" },
    { nome: "Svelte", porcentagem: "82" },
    { nome: "Photoshop", porcentagem: "78" },
    { nome: "ReactJs", porcentagem: "73" },
    { nome: "Typescript", porcentagem: "60" },
    { nome: "DevOps", porcentagem: "60" },
    { nome: "SAPUI5", porcentagem: "57" },
    { nome: "NodeJs", porcentagem: "43" },
    { nome: "UX Design", porcentagem: "30" },
    { nome: "Java", porcentagem: "30" },
    { nome: "Illustrator", porcentagem: "20" },
  ]);
  const [skills] = useState([
    { nome: "Criatividade", porcentagem: "87" },
    { nome: "Liderança", porcentagem: "90" },
    { nome: "Pontualidade", porcentagem: "95" },
    { nome: "Comunicação", porcentagem: "95" },
    { nome: "Compromisso", porcentagem: "100" },
    { nome: "Proatividade", porcentagem: "100" },
  ]);

  const metade = Math.ceil(habilidades.length / 2);
  const primeiraMetade = habilidades.slice(0, metade);
  const segundaMetade = habilidades.slice(metade);

  return (
    <div
      className="bg-black font-barlow text-center h-100v d-grid"
      id="Curriculo"
    >
      <div className="centralizar-meio">
        <div className="text-start w-100 c-white m-auto p-0">
          <div className="c-white f-2 text-center mb-5">
            &lt; {t("Curriculo")}/&gt;
          </div>
          <div className="row linha-port p-0 mt-5 justify-center m-auto">
            <div className="col" style={{ minWidth: "300px" }}>
              {primeiraMetade.map((ability, i) => {
                return (
                  <div className="row mt-3" key={i}>
                    <div className="col-4" style={{ minWidth: "150px" }}>
                      {ability.nome}
                    </div>
                    <div className="col m-auto" style={{ minWidth: "150px" }}>
                      <div className="f-06 c-gray-claro text-end">
                        {ability.porcentagem}%
                      </div>
                      <ProgressBar
                        now={ability.porcentagem}
                        className="bg-progress-bar"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col" style={{ minWidth: "300px" }}>
              {segundaMetade.map((ability, i) => {
                return (
                  <div className="row mt-3" key={i}>
                    <div className="col-4" style={{ minWidth: "150px" }}>
                      {ability.nome}
                    </div>
                    <div className="col m-auto" style={{ minWidth: "150px" }}>
                      <div className="f-06 c-gray-claro text-end">
                        {ability.porcentagem}%
                      </div>
                      <ProgressBar
                        now={ability.porcentagem}
                        className="bg-progress-bar"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row linha-port pt-5 justify-center m-auto">
            {skills.map((skill, i) => {
              return (
                <div
                  className="col text-center mt-2"
                  key={i}
                  style={{ minWidth: "115px", maxWidth: "150px" }}
                >
                  <CircularProgressbar
                    value={skill.porcentagem}
                    text={`${skill.porcentagem}%`}
                    strokeWidth={5}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "rgb(160 0 255)",
                      trailColor: "#bebebe",
                    })}
                  />
                  <div className="mt-2">{t(skill.nome)}</div>
                </div>
              );
            })}
          </div>
          <div className="row linha-port pt-5 pb-5 justify-center m-auto">
            <a
              href={PDF}
              target="_blank"
              className="btn-black t-none p-2 w-50"
              rel="noopener noreferrer"
            >
              {" "}
              {t("Visualizar currículo")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
