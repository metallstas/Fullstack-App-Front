import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    tags: [],
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        // getAllPosts(state, action) {
        // }
    },
})

export const postReducer = postsSlice.reducer
