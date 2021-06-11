import { useState, useEffect } from "react";

export const useTheme = (): [ string, () => void ] => {
  const [ theme, setTheme ] = useState(""); // Default theme: 'light'

  /**
   * On page load, first checks if 'theme' is stored in 'localStorage'.
   * If it is, use the corresponding value as 'theme'.
   * If it is not, use the user's operating system preferences.
   */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme !== null) {
      setTheme(storedTheme);
    } else if(window) {
      const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if(themeMediaQuery && themeMediaQuery.matches) {
        setTheme(themeMediaQuery.matches ? "dark" : "");
      }
    }
  }, []);

  // Update 'localStorage' when 'theme' changes
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add(theme)
      : document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [ theme ]);

  
  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "" : "dark");
  };

  return [ theme, toggleTheme ];
};
