import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../../services/topbar.redux";
import { changeLanguageService } from "../../../services/i18n.services";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const language = useSelector((state) => state.topBarRedux.language);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const nextLanguage = language === "PT" ? "EN" : "PT";

  const handleChangeLanguage = () => {
    dispatch(changeLanguage(nextLanguage));
    changeLanguageService(nextLanguage, i18n);
  };

  return (
    <button
      className="language-toggle"
      id="changeLanguage"
      type="button"
      onClick={handleChangeLanguage}
      aria-label={t("nav.change_language", { language: nextLanguage })}
    >
      {nextLanguage}
    </button>
  );
};

export default ChangeLanguage;
