import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../types'

export const fetchNewPost = createAsyncThunk<
    Post,
    { title: string; text: string; tags: any },
    { rejectValue: string }
>('posts/newPost', async (post, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/posts', {
        method: 'POST',

        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        body: JSON.stringify(post),
    })

    if (!response.ok) {
        return rejectWithValue(response.statusText)
    }

    return response.json()
})

export const fetchPosts = createAsyncThunk<
    Post[],
    void,
    { rejectValue: string }
>('posts/fetchPosts', async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/posts', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    })

    if (!response.ok) {
        return rejectWithValue(response.statusText)
    }

    return response.json()
})

export const fetchPostById = createAsyncThunk<
    Post,
    string | undefined,
    { rejectValue: string }
>('posts/fethcPostById', async (id, { rejectWithValue }) => {
    console.log(id)
    const response = await fetch(`http://localhost:4444/posts/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    })

    if (!response.ok) {
        return rejectWithValue(await response.json())
    }

    return await response.json()
})

type InitialState = {
    posts: Post[]
    status: string
    sort: string
    error: undefined | string
    postById: Post | undefined
    statusFullPost: string
    errorFullPost: string | undefined
}

const initialState: InitialState = {
    posts: [],
    error: '',
    status: 'loading',
    sort: 'new',
    postById: undefined,
    statusFullPost: 'loading',
    errorFullPost: '',
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
        builder.addCase(fetchPostById.pending, (state) => {
            state.statusFullPost = 'loading'
        })
        builder.addCase(
            fetchPostById.rejected,
            (state, action: PayloadAction<string | undefined>) => {
                state.statusFullPost = 'error'
                state.errorFullPost = action.payload
            }
        )
        builder.addCase(
            fetchPostById.fulfilled,
            (state, action: PayloadAction<Post>) => {
                state.postById = action.payload
                state.statusFullPost = 'idle'
            }
        )
    },
})

export const { activeSort } = postsSlice.actions

export default postsSlice.reducer
