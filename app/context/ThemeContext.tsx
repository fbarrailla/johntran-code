"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme = "blue" | "green" | "orange" | "silver";

const VALID_THEMES: Theme[] = ["blue", "green", "orange", "silver"];

type ThemeContextType = { theme: Theme; setTheme: (t: Theme) => void };

const ThemeContext = createContext<ThemeContextType>({ theme: "silver", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("silver");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && VALID_THEMES.includes(stored)) {
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  function setTheme(t: Theme) {
    setThemeState(t);
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute("data-theme", t);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
