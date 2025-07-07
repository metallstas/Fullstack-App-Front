import 'react-router'

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    ADD_POST: '/add-post',
    POST: '/post/:postId',
    POST_REDACT: '/edit/:postId',
} as const

export type PathParams = {
    [ROUTES.POST]: {
        postId: string
    }
    [ROUTES.POST_REDACT]: {
        postId: string
    }
}

declare module 'react-router' {
    interface Register {
        params: PathParams
    }
}
