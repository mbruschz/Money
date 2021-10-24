import React, { createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { globalTheme } from './themes'

interface Theme {
  colors: {
    primary: string,
    black: string,
    background: string,
    border: string,
  }
}

const ThemeContext = createContext<Theme>({} as Theme)

export const useTheme = (): Theme => useContext(ThemeContext)

export const CustomThemeProvider: React.FC = ({ children }) => {
  return (
      <ThemeProvider theme={globalTheme}>
        {children}
      </ThemeProvider>
  )
}

export default ThemeProvider
