import { createContext, useContext, useEffect, useState } from "react";

/**
 * THEME CONTEXT
 *
 * Manages dark/light/system theme across the app.
 * Three modes:
 * - 'light': Always light theme
 * - 'dark': Always dark theme
 * - 'system': Follows user's OS preference
 */
const ThemeContext = createContext();

/**
 * Custom Hook: useTheme
 * Access theme anywhere: const { theme, setTheme } = useTheme();
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  /**
   * State: Current theme mode
   * Initialized from localStorage or defaults to 'system'
   * Using function form of useState for lazy initialization
   */
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  /**
   * Effect: Apply theme to HTML element
   * Runs whenever theme changes
   *
   * - Use data-theme attribute
   * - DaisyUI automatically applies theme based on data-theme
   */
  useEffect(() => {
    const root = document.documentElement; // The <html> element

    /**
     * Helper: Apply theme to DOM
     * Sets data-theme attribute for DaisyUI
     */
    const applyTheme = (themeName) => {
      root.setAttribute("data-theme", themeName);
    };

    // SYSTEM MODE: Listen to OS preference changes
    if (theme === "system") {
      // Check if user prefers dark mode at OS level
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      applyTheme(systemTheme);

      // Listen for changes (user changes OS theme while app is open)
      const handler = (e) => applyTheme(e.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handler);

      // Cleanup: remove listener when component unmounts
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      // MANUAL MODE: User chose light or dark
      applyTheme(theme);
    }
  }, [theme]); // Re-run when theme changes

  /**
   * Update Theme Function
   * Saves to localStorage so preference persists
   */
  const setThemeMode = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
