import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    name: string
    email: string
    password: string
    visiblePass: boolean
}

const initialState: InitialState = {
    name: '',
    email: '',
    password: '',
    visiblePass: false,
}

const registerSlice = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {
        name(state, action: PayloadAction<{ name: string }>) {
            state.name = action.payload.name
        },
        email(state, action: PayloadAction<{ email: string }>) {
            state.email = action.payload.email
        },
        password(state, action: PayloadAction<{ password: string }>) {
            state.password = action.payload.password
        },
        visible(state) {
            state.visiblePass = !state.visiblePass
        },
    },
})

export const { name, email, password, visible } = registerSlice.actions

export default registerSlice.reducer
