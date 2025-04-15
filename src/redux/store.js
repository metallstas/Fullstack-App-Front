import { configureStore } from '@reduxjs/toolkit'
// import { postReducer } from './slices/posts'
import { postsApi } from './postsApi'

const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
})

export default store
