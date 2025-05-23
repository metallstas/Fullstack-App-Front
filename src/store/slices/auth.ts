import { chackValidPass, checkValidEmail } from '@/validation'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
    email: string
    password: string
    visiblePass: boolean
    validEmail: string
    validPassword: string
    isAuth: boolean
}

const initialState: initialState = {
    email: '',
    password: '',
    visiblePass: false,
    validEmail: '',
    validPassword: '',
    isAuth: false,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        visiblePass(state) {
            state.visiblePass = !state.visiblePass
        },
        setEmail(state, action: PayloadAction<{ email: string }>) {
            state.email = action.payload.email
            state.validEmail = checkValidEmail(action.payload.email)
        },
        setPassword(state, action: PayloadAction<{ password: string }>) {
            state.password = action.payload.password
            state.validPassword = chackValidPass(action.payload.password)
        },
    },
})

export const { visiblePass, setEmail, setPassword } = authSlice.actions

export default authSlice.reducer
