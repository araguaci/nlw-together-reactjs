import { createContext, ReactNode, useEffect, useState } from 'react';

type LanguageContextData = {
  locale: string;
  setLocale: (locale: string) => void;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const defaultLocale = 'pt';
export const locales = ['pt', 'en'];
export const LanguageContext = createContext({} as LanguageContextData);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState('pt');

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem('lang') || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
