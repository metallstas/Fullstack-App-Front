import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/posts'
import authSlice from './slices/auth'
import registerSlice from './slices/register'
import tagsSlice from './slices/tags'

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        auth: authSlice,
        register: registerSlice,
        tags: tagsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
