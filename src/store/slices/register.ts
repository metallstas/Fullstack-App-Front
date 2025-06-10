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
    reducers: {},
})

export const {} = registerSlice.actions

export default registerSlice.reducer
