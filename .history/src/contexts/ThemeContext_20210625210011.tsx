import React, { createContext, useState, useContext } from 'react'

import { ThemeProvider as ThemeProviderComponent } from 'styled-components'
import { ReactNode } from 'react';

type themeType = 'light' | 'dark'

type ThemeContextProviderProps = {
  children: ReactNode;
}

type ThemeContextType = {
  themeName: themeType;
  changeTheme(name: string): void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<themeType>('light')

  function changeTheme () {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      <ThemeProviderComponent theme={themename}>{children}</ThemeProviderComponent>
    </ThemeContext.Provider>
  )
}

// Hook próprio
export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  return context
}
