import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    status: string
}

const initialState: InitialState = {
    tags: [],
    status: 'loading',
}

const tagsSlice = createSlice({
    name: 'tagsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(
            fetchTags.fulfilled,
            (state, action: PayloadAction<string[]>) => {
                state.tags = action.payload
                state.status = 'idle'
            }
        )
        builder.addCase(fetchTags.rejected, (state) => {
            state.status = 'error'
        })
    },
})

export const {} = tagsSlice.actions

export default tagsSlice.reducer
