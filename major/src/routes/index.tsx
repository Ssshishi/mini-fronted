import './index.css'

import { RouteObject, useRoutes } from 'react-router-dom'

import DefaultLayout from '@/layouts/default'

export const Routes = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/minor-next',
          element: <DefaultLayout />,
        },
        {
          path: '/minor-umi',
          element: <DefaultLayout />,
        },
        {
          path: '/minor-web',
          element: <DefaultLayout />,
        },
        { path: '*', element: <DefaultLayout /> },
      ],
    },
  ]

  let element = useRoutes(routes)

  return <div>{element}</div>
}

export default Routes
