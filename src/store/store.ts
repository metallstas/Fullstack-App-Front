import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/posts'
import textEditorSlice from './slices/textEditor'

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        textEditor: textEditorSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
