import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/posts'
import authSlice from './slices/auth'
import registerSlice from './slices/register'

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        auth: authSlice,
        register: registerSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
