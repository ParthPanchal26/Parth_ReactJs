import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Jhon doe"
}

const create = createSlice({
    name: "Create",
    initialState,
    reducers: {
        createName: (state, action) => {
            state.value = action.payload
        },
        updateName: (state, action) => {
            state.value = action.payload
        },
        readName: (state) => {
            return state.value
        },
        deleteName: (state) => {
            state.value = ""
        }
    }
})

export const { createName, updateName, readName, deleteName } = create.actions
export default create.reducer