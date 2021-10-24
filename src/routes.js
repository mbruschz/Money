/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Route, BrowserRouter } from 'react-router-dom'
import Main from './pages/Main'

const Routes = (props) => {
  // eslint-disable-next-line no-console
  return (
    <BrowserRouter>
      <Route component = { Main } path='/' exact />
    </BrowserRouter>
  )
}

export default Routes
