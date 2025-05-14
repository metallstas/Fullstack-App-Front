import 'react-router'

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    ADD_POST: '/add-post',
    POST: '/post/:postId',
} as const

export type PathParams = {
    [ROUTES.POST]: {
        postId: string
    }
}

declare module 'react-router' {
    interface Register {
        params: PathParams
    }
}
