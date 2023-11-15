import React from "react";
import { useTranslation } from "react-i18next";

export default function Sobre() {
  const { t } = useTranslation();
  return (
    <div className="bg-black font-barlow text-center h-100v d-grid" id="Sobre">
      <div className="centralizar-meio">
        <div className="text-start w-75 c-white m-auto">
          <div className="c-white f-1-2 text-center mb-5">
            &lt; {t("Sobre")} /&gt;
          </div>
          <div className="c-gray-claro">
            <p>{t("Sobre parte 1")}</p>

            <p>{t("Sobre parte 2")}</p>

            <p>{t("Sobre parte 3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
