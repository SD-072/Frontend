/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, use, useState } from 'react';

type ThemeContextType = {
  theme: UsableThemes;
  changeTheme: (newTheme: UsableThemes) => void;
};

export type UsableThemes = (typeof allowedThemes)[number];

export const ThemeContext = createContext<ThemeContextType | null>(null);

const allowedThemes = ['halloween', 'cyberpunk', 'dim', 'abyss', 'retro'] as const;

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<UsableThemes>('halloween');

  function changeTheme(newTheme: UsableThemes) {
    setTheme(newTheme);
    //   here could go localStorage logic
  }

  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used withing a ThemeContextProvider');
  }
  return context;
}
