import { useTranslation } from "react-i18next";

const useLang = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: "uz" | "ru") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const currentLang = i18n.language as "uz" | "ru";

  const lang = currentLang || "uz" || "ru";

  return { currentLang, lang, changeLang, t };
};

export default useLang;
