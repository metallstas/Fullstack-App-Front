import { Author } from '@/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    name: string
    email: string
    password: string
    visiblePass: boolean
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
    { rejectValue: any }
>('registerSlice/fetchRegister', async (userData, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/auth/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    if (!response.ok) {
        return rejectWithValue(response.json())
    }
    console.log(response.json())
    return response.json()
})

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
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    },
})

export const {} = registerSlice.actions

export default registerSlice.reducer
