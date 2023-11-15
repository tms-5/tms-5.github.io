import { useTranslation as translationI18n } from "react-i18next";
import EN from "../locales/en/en.json";

export function changeLanguageService(language, i18n) {
  i18n.changeLanguage(language);
}

export function translation(text) {
  const { t, i18n } = translationI18n();

  if (i18n.exists(text) === true) {
    return t(text);
  } else if (EN.translation[text] !== undefined) {
    return t(text);
  } else {
    return t(text);
  }
}
