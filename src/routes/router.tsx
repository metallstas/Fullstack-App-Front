import { App } from '@/pages/App/App'
import { createBrowserRouter } from 'react-router'
import { ROUTES } from './routes'

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: ROUTES.HOME,
                lazy: () => import('@/pages/Home/Home'),
            },
            {
                path: ROUTES.LOGIN,
                lazy: () => import('@/pages/Login/Login'),
            },
            {
                path: ROUTES.REGISTER,
                lazy: () => import('@/pages/Register/Register'),
            },
            {
                path: ROUTES.POST,
                lazy: () => import('@/pages/Post/Post'),
            },
            {
                path: ROUTES.ADD_POST,
                lazy: () => import('@/pages/Post/Post'),
            },
        ],
    },
])
