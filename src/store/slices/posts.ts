import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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
}

const initialState: InitialState = {
    posts: [],
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    },
})

export default postsSlice.reducer
