import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./language/uz.json";
import ru from "./language/ru.json";

const currentLang = localStorage.getItem("lang") as "en" | "uz" | "ru";

i18n.use(initReactI18next).init({
  resources: {
    uz: { ...uz },
    ru: { ...ru },
  },
  lng: currentLang || "uz",
});
