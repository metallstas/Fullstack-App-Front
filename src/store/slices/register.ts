import { Author } from '@/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    data: TRegAuthor | null
    status: string
    error: string | undefined
}

type TRegAuthor = Author & { token: string }

type TUserData = {
    fullName: string
    email: string
    password: string
}

export const fetchRegister = createAsyncThunk<
    TRegAuthor,
    TUserData,
    { rejectValue: string }
>('registerSlice/fetchRegister', async (userData, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/auth/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    if (!response.ok) {
        const res = await response.json()
        return rejectWithValue(res.message)
    }
    return response.json()
})

const initialState: InitialState = {
    data: null,
    status: 'idle',
    error: undefined,
}

const registerSlice = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegister.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(
                fetchRegister.fulfilled,
                (state, action: PayloadAction<TRegAuthor>) => {
                    state.status = 'idle'
                    state.error = undefined
                    state.data = action.payload
                }
            )
            .addCase(
                fetchRegister.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload
                    state.status = 'idle'
                }
            )
    },
})

export const {} = registerSlice.actions

export default registerSlice.reducer
