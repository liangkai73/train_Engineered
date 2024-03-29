import { Navigate, createBrowserRouter } from 'react-router-dom'
import Popular from '@/views/popular/index'
import Error404 from '@/views/404'
import Battle from '@/views/battle'
import BattleResult from '@/views/battle/result'
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Popular />
  },
  {
    path: '/battle',
    element: <Battle />
  },
  {
    path: '/battle-result',
    element: <BattleResult />
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />
  },
  {
    path: '/404',
    element: <Error404 />
  }
])

export default routers
