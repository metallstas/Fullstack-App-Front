import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTags = createAsyncThunk<
    string[],
    void,
    { rejectValue: string }
>('tags/fetchTags', async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:4444/tags')

    if (!response.ok) {
        return rejectWithValue(response.statusText)
    }

    return response.json()
})

type InitialState = {
    tags: string[]
}

const initialState: InitialState = {
    tags: [],
}

const tagsSlice = createSlice({
    name: 'tagsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.tags = action.payload
        })
    },
})

export const {} = tagsSlice.actions

export default tagsSlice.reducer
