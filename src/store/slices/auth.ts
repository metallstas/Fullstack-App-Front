import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

type TData = {
    avatarUrl: string
    createdAt: string
    email: string
    fullName: string
    token: string
    updatedAt: string
    __v: number
    _id: string
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
    TData,
    { email: string; password: string },
    { rejectValue: string }
>('authSlice/fetchUserData', async (dataUser, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        body: JSON.stringify(dataUser),
    })

    if (!response.ok) {
        const resp = await response.json()
        return rejectWithValue(resp.message)
    }
    return response.json()
})

export const fetchAuthMe = createAsyncThunk<
    TData,
    void,
    { rejectValue: string }
>('authSlice/fetchAuthMe', async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/auth/me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    })

    if (!response.ok) {
        const resp = await response.json()
        return rejectWithValue(resp.message)
    }

    return response.json()
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout(state) {
            state.data = null
            state.isAuth = false
            window.localStorage.removeItem('token')
        },
    },
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
                    state.isAuth = true
                    window.localStorage.setItem('token', action.payload.token)
                }
            )
            .addCase(
                fetchUserData.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.status = 'error'
                    state.error = action.payload
                }
            )
            .addCase(fetchAuthMe.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(
                fetchAuthMe.fulfilled,
                (state, action: PayloadAction<TData>) => {
                    state.status = 'idle'
                    state.error = undefined
                    state.data = action.payload
                    state.isAuth = true
                }
            )
            .addCase(
                fetchAuthMe.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.status = 'error'
                    state.error = action.payload
                }
            )
    },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
