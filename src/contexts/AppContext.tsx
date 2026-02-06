import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language } from '../types';

interface AppState {
  language: Language;
  isDark: boolean;
}

interface AppContextType {
  language: Language;
  isDark: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  setIsDark: (isDark: boolean) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, setState] = useState<AppState>(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : true;

    return {
      language: 'ko',
      isDark: savedTheme ? savedTheme === 'dark' : prefersDark,
    };
  });

  // Sync theme with document and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (state.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
  }, [state.isDark]);

  // Sync language with document
  useEffect(() => {
    document.documentElement.lang = state.language;
  }, [state.language]);

  const setLanguage = (lang: Language) => {
    setState(prev => ({ ...prev, language: lang }));
  };

  const toggleLanguage = () => {
    setState(prev => ({ ...prev, language: prev.language === 'ko' ? 'en' : 'ko' }));
  };

  const setIsDark = (isDark: boolean) => {
    setState(prev => ({ ...prev, isDark }));
  };

  const toggleTheme = () => {
    setState(prev => ({ ...prev, isDark: !prev.isDark }));
  };

  return (
    <AppContext.Provider
      value={{
        language: state.language,
        isDark: state.isDark,
        setLanguage,
        toggleLanguage,
        setIsDark,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export function useLanguage() {
  const { language, setLanguage, toggleLanguage } = useApp();
  return { language, setLanguage, toggleLanguage };
}

export function useTheme() {
  const { isDark, setIsDark, toggleTheme } = useApp();
  return { isDark, setIsDark, toggleTheme };
}
