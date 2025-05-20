import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    bold: boolean
    italic: boolean
}

const initialState = {
    bold: false,
    italic: false,
}

const textEditorSlice = createSlice({
    name: 'textEditorSlice',
    initialState,
    reducers: {
        isBold(state) {
            state.bold = !state.bold
        },
        isItalic(state) {
            state.italic = !state.italic
        },
    },
})

export const { isBold, isItalic } = textEditorSlice.actions

export default textEditorSlice.reducer
