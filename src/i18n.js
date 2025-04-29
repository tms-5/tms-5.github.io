import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./locales/en/en.json";
import PT from "./locales/pt/pt.json";

const resources = {
  EN: EN,
  PT: PT,
};

i18n.use(initReactI18next).init({
  resources,
  EN: {
    translation: EN,
  },
  PT: {
    translation: PT,
  },
  fallbackLng: "PT",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
