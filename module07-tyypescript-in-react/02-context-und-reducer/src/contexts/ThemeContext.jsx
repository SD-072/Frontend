/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useState } from 'react';

export const ThemeContext = createContext('halloween');

const allowedThemes = ['halloween', 'cyberpunk', 'dim', 'abyss', 'retro'];

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('halloween');

  function changeTheme(newTheme) {
    if (allowedThemes.includes(newTheme)) {
      setTheme(newTheme);
      //   here could go localStorage logic
    }
  }

  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
  return use(ThemeContext);
}
