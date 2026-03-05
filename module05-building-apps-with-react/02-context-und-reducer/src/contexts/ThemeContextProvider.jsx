import { use, useState } from 'react';

import { ThemeContext } from './ThemeContext';

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
