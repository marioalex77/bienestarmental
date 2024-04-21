import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "es",
    fallbackLng: {
      "en-US": ["en"],
      "es-SV": ["es"],
      default: ["es"],
    },
    interpolation: {
      escapeValue: false,
    },
    resorces: {
      es: {
        translation: {
          language: "Español",
          phone: "+503 2228-2631",
          mobile: "+503 6439-1622",
          email: "marioalex77@hotmail.com",
        },
      },
      en: {
        translation: {
          language: "English",
          phone: "+503 2228-2631",
          mobile: "+503 6439-1622",
          email: "marioalex77@hotmail.com",
        },
      },
      react: {
        wait: true,
      },
    },
  });

export default i18n;
