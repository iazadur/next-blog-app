import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: undefined,
}

const postSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateState: (state, action) => {
            state.data = action.payload;
        },
        
    }
})

export const { updateState } = postSlice.actions
export default postSlice.reducer