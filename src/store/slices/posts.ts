import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../types'

export const fetchPosts = createAsyncThunk<Post[], void>(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('http://localhost:4444/posts')

        return response.json()
    }
)

type InitialState = {
    posts: Post[]
    sort: string
}

const initialState: InitialState = {
    posts: [],
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
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    },
})

export const { activeSort } = postsSlice.actions

export default postsSlice.reducer
