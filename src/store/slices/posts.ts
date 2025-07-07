import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../types'

export const fetchNewPost = async (post: newPost) => {
    const response = await fetch('http://localhost:4444/posts', {
        method: 'POST',

        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        body: JSON.stringify(post),
    })

    return response.json()
}

export const fetchUpdatePost = async (id: string, post: newPost) => {
    const response = await fetch(`http://localhost:4444/posts/${id}`, {
        method: 'PATCH',

        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        body: JSON.stringify(post),
    })

    return response.json()
}

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

export const fetchDeletePost = createAsyncThunk<
    deletePost,
    string,
    { rejectValue: boolean }
>('posts/fetchDeletePost', async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:4444/posts/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    })
    if (!response.ok) {
        return rejectWithValue(await response.json().then((res) => res.success))
    }
    return { success: await response.json().then((res) => res.success), id }
})

type deletePost = {
    success: boolean
    id?: string
}

type newPost = {
    title: string
    tags?: string[]
    text: string
    imageUrl?: string
}

type InitialState = {
    posts: Post[]
    deletePost: boolean
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
    deletePost: false,
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
        builder.addCase(
            fetchDeletePost.fulfilled,
            (state, action: PayloadAction<deletePost>) => {
                state.deletePost = action.payload.success
                state.posts = state.posts.filter(
                    (post) => post._id !== action.payload.id
                )
            }
        )
    },
})

export const { activeSort } = postsSlice.actions

export default postsSlice.reducer
