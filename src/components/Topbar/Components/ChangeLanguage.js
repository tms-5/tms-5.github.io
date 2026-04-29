import { changeLanguageService } from "../../../services/i18n.services";
import { useTranslation } from "react-i18next";
import { UIButton } from "../../ui";

const ChangeLanguage = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language || "EN";
  const nextLanguage = language === "PT" ? "EN" : "PT";

  const handleChangeLanguage = () => {
    changeLanguageService(nextLanguage, i18n);
  };

  return (
    <UIButton
      className="min-w-[42px] px-3 text-[0.78rem]"
      variant="ghost"
      id="changeLanguage"
      onClick={handleChangeLanguage}
      aria-label={t("nav.change_language", { language: nextLanguage })}
    >
      {nextLanguage}
    </UIButton>
  );
};

export default ChangeLanguage;
