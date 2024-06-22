import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./language/uz.json";
import ru from "./language/ru.json";

const currentLang = localStorage.getItem("lang") as "uz" | "ru";
const defaultLang: "uz" | "ru" = currentLang || "uz";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    ru: { translation: ru },
  },
  lng: defaultLang,
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
