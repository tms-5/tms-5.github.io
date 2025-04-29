import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../../services/topbar.redux";
import { useState } from "react";
import { changeLanguageService } from "../../../services/i18n.services";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const language = useSelector((state) => state.topBarRedux.language);
  const dispatch = useDispatch();
  const [dropwdon, setDropdown] = useState(false);

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const setLanguage = language === "PT" ? "EN" : "PT";
    dispatch(changeLanguage(setLanguage));
    changeLanguageService(setLanguage, i18n);
  };
  return (
    <>
      <div
        className="language-square p-2 c-white c-pointer"
        onClick={() => setDropdown(!dropwdon)}
      >
        <FontAwesomeIcon
          icon={faGlobe}
          className="c-white margin-right-small"
        />
        {language === "PT" ? "PT-BR" : "EN-USA"}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`margin-left-small fs-08 c-blue ${!dropwdon && "rotate"}`}
        />
      </div>
      <div
        id="myDropdown"
        className={`dropdown-content ${dropwdon && "showDrop"}`}
      >
        <button onClick={handleChangeLanguage}>PT-BR</button>
        <button onClick={handleChangeLanguage}>EN-USA</button>
      </div>
    </>
  );
};

export default ChangeLanguage;
