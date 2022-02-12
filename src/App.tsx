import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/global'
import RoutesPaths from './routes';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Content } from './pages/transactions';

export const defaultHistory = createBrowserHistory();

interface AppProps {
  history?: any,
  path?: string,
  host?: string,
  containerContext?: any,
}

const App = (props: AppProps): JSX.Element => {
  const {
    history = defaultHistory,
    path = '',
    host = '',
    containerContext = { user: {}, token: ''},
  } = props;

  return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <BrowserRouter>
      <RoutesPaths path={path}/>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
