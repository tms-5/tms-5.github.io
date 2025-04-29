import React, { useState } from "react";
import "./Portfolio.css";
import mvMidia from "./Arquivos/mv-telecom-site.png";
import Virttus from "../Img/Projetos/virttus.png";
import centauro from "../Img/Projetos/centauro.png";
import mv from "../Img/Projetos/MV-telecom.png";
import nortax from "../Img/Projetos/nortax.png";
import eduardo from "../Img/Projetos/eduardo.png";
import inove from "../Img/Projetos/inove.png";
import Modal from "./Modal.js";
import centauroMidia from "./Arquivos/TesteCentauro.mp4";
import inoveMidia from "./Arquivos/inove-website.jpg";
import eduardoMidia from "./Arquivos/eduardo-website.jpg";
import nortaxMidia from "./Arquivos/mockup-advg.png";
import virttusMidia from "./Arquivos/virttus-video.mp4";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  const [projetos] = useState([
    {
      nome: "Centauro",
      index: 1,
      type: 1,
      image: centauro,
      media: centauroMidia,
      texto: "texto Centauro",
    },
    {
      nome: "MvTelecom",
      index: 2,
      type: 0,
      image: mv,
      media: mvMidia,
      texto: "texto MVTelecom",
    },
    {
      nome: "Consultoria Juridica",
      media: nortaxMidia,
      index: 3,
      type: 0,
      image: nortax,
      texto: "texto consultoria",
    },
    {
      nome: "Portfolio Eduardo",
      index: 4,
      image: eduardo,
      type: 0,
      media: eduardoMidia,
      texto: "texto Eduardo",
    },
    {
      nome: "Portfolio Agência Inove",
      index: 4,
      image: inove,
      type: 0,
      media: inoveMidia,
      texto: "texto inove",
    },
    {
      nome: "Virttus Energia",
      index: 5,
      type: 1,
      media: virttusMidia,
      image: Virttus,
      texto: "texto Virttus",
    },
  ]);
  const [modal, setModal] = useState(false);
  const [text, setText] = useState(null);
  const [media, setMedia] = useState(null);
  const [type, setType] = useState(true);

  return (
    <div
      className="bg-black font-barlow text-center h-100v d-grid"
      id="Portfolio"
    >
      <div className="centralizar-meio">
        <div className="text-start c-white m-auto">
          <div className="c-white f-2 text-center mb-5">
            &lt; {t("Portfolio")}/&gt;
          </div>
          <div className="row m-3 pb-5 justify-center mt-5">
            {projetos.map((projeto, i) => {
              return (
                <div className="card-port" key={i}>
                  <div className="card-glass">
                    <div className="pl-3 pr-3 pt-3 fade-bg">
                      <button
                        className="btn-black f-09 hidden p-absolute z-10"
                        onClick={() => {
                          setModal(true);
                          setText(projeto.texto);
                          setMedia(projeto.media);
                          setType(projeto.type);
                        }}
                      >
                        {t("Saiba mais")}
                      </button>
                      <img src={projeto.image} width="100%" />
                    </div>
                    <div className="pl-3 f-1-5">{t(projeto.nome)}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {modal ? (
            <Modal
              type={type}
              texto={text}
              media={media}
              hideModal={() => setModal(false)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
