import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
type TData = {
    email: string
    password: string
}

type initialState = {
    data: TData | null
    error: string | undefined
    isAuth: boolean
    status: string
}

const initialState: initialState = {
    data: null,
    error: undefined,
    isAuth: false,
    status: 'loading',
}

export const fetchUserData = createAsyncThunk<
    any,
    TData,
    { rejectValue: string }
>('authSlice/fetchUserData', async (dataUser, { rejectWithValue }) => {
    console.log(dataUser)
    const response = await fetch('http://localhost:4444/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(dataUser),
    })

    if (!response.ok) {
        const resp = await response.json()
        console.log(resp)
        return rejectWithValue(resp.message)
    }

    return response.json()
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(
                fetchUserData.fulfilled,
                (state, action: PayloadAction<TData>) => {
                    state.status = 'idle'
                    state.error = undefined
                    state.data = action.payload
                }
            )
            .addCase(
                fetchUserData.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.status = 'error'
                    state.error = action.payload
                }
            )
    },
})

export const {} = authSlice.actions

export default authSlice.reducer
