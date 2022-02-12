import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import { Content } from '../pages/transactions';
import { ROUTE_PATH } from './routePaths';

interface RouteProps {
  path?: string,
}

const RoutesPaths = (props: RouteProps): JSX.Element => {
  const { path = '' } = props;

  return (
    <Routes>
      <Route 
        path={`${path}${ROUTE_PATH.account_Transactions}`}
        element={<Content />}
      />
    </Routes>
  )
}

export default RoutesPaths;