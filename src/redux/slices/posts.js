import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    tags: [],
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
})

export const postReducer = postsSlice.reducer
