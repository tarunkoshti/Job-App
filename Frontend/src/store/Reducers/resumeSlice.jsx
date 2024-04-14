import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resumeData: null,
};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        setResume: (state, action) => {
            state.resumeData = action.payload
        }
    }
})

export const { setResume } = resumeSlice.actions;

export default resumeSlice.reducer;