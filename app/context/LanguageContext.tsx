"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "../i18n/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "vn") {
      setLangState(stored);
      document.documentElement.setAttribute("lang", stored === "vn" ? "vi" : "en");
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.setAttribute("lang", l === "vn" ? "vi" : "en");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
