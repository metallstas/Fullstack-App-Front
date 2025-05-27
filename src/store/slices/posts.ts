import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../types'

export const fetchPosts = createAsyncThunk<
    Post[],
    void,
    { rejectValue: string }
>('posts/fetchPosts', async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/posts')

    if (!response.ok) {
        return rejectWithValue(response.statusText)
    }

    return response.json()
})

type InitialState = {
    posts: Post[]
    status: string
    sort: string
    error: undefined | string
}

const initialState: InitialState = {
    posts: [],
    error: '',
    status: 'idle',
    sort: 'new',
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        activeSort(state, action: PayloadAction<string>) {
            state.sort = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(
            fetchPosts.rejected,
            (state, action: PayloadAction<string | undefined>) => {
                state.status = 'error'
                state.error = action.payload
            }
        )
        builder.addCase(
            fetchPosts.fulfilled,
            (state, action: PayloadAction<Post[]>) => {
                state.status = 'idle'
                state.posts = action.payload
            }
        )
    },
})

export const { activeSort } = postsSlice.actions

export default postsSlice.reducer
