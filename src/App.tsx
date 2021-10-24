import React from 'react'
import Routes from './routes'
import { CustomThemeProvider } from './styles/themeProvider'

interface AppProps {
  path?: string
}
const App: React.FunctionComponent<AppProps> = ({
  path = window.location.pathname
}: AppProps) => {
  return (
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  )
}

export default App
