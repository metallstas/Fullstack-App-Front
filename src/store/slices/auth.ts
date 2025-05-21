import { createSlice } from '@reduxjs/toolkit'

type initialState = {
	email: string
	password: string
	visiblePass: boolean
}

const initialState: initialState = {
	email: '',
	password: '',
	visiblePass: false,
}

const Auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		visiblePass(state) {
			state.visiblePass = !state.visiblePass
		},
	},
})

export const { visiblePass } = Auth.actions

export default Auth.reducer
