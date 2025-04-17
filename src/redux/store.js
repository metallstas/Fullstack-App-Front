import { configureStore } from '@reduxjs/toolkit'
// import { postReducer } from './slices/posts'
import { postsApi } from './postsApi'
import { userApi } from './userApi'

const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(postsApi.middleware)
            .concat(userApi.middleware),
})

export default store
