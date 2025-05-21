import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/posts'
import auth from './slices/auth'

export const store = configureStore({
	reducer: {
		posts: postsSlice,
		auth: auth,
	},
})
auth
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
