import React from "react";
import Email from "./Email.js";
import Insta from "./Insta.js";
import Linkedin from "./Linkedin.js";
import Whats from "./Whats.js";
import "./Contato.css";
import "./Contato.scss";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-black font-barlow text-center h-100v d-grid"
      id="Contato"
    >
      <div className="centralizar-meio">
        <div className="text-start c-white m-auto" style={{ width: "82%" }}>
          <div className="c-white f-2 text-center mb-5">
            &lt; {t("Contato")}/&gt;
          </div>
          <div className="row m-auto text-center pt-5">
            <div className="col mt-1" style={{ minWidth: "65px" }}>
              <a
                href="https://api.whatsapp.com/send?phone=5581997350799"
                target="_blank"
              >
                <Whats />
              </a>
            </div>
            <div className="col mt-1" style={{ minWidth: "65px" }}>
              <a href="https://www.linkedin.com/in/tms5/" target="_blank">
                <Linkedin />
              </a>
            </div>
            <div className="col mt-1" style={{ minWidth: "65px" }}>
              <a href="https://www.instagram.com/thamsjobs/" target="_blank">
                <Insta />
              </a>
            </div>
            <div className="col mt-1" style={{ minWidth: "65px" }}>
              <a href="mailto:thamiiresmorais2@gmail.com" target="_blank">
                <Email />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}