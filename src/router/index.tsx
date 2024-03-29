import { Navigate, createBrowserRouter } from 'react-router-dom'
import Popular from '@/views/popular/index'
import Error404 from '@/views/404'
import Battle from '@/views/battle'
import BattleResult from '@/views/battle/result'
const routers = createBrowserRouter([
  {
    path: '/train_Engineered',
    element: <Popular />
  },
  {
    path: '/train_Engineered/battle',
    element: <Battle />
  },
  {
    path: '/train_Engineered/battle-result',
    element: <BattleResult />
  },
  {
    path: '/train_Engineered/*',
    element: <Navigate to={'/404'} />
  },
  {
    path: '/train_Engineered/404',
    element: <Error404 />
  }
])

export default routers
