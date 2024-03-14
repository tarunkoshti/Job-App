import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    internshipData: null
};

const internshipSlice = createSlice({
    name: "internship",
    initialState,
    reducers: {
        readAllInternship: (state, action) => {

        },
        readHisOwnInternship: (state, action) => {

        },
        readSingleInternship: (state, action) => {

        },
        createInternship: (state, action) => {

        }
    }
})

export const { readAllInternship, readHisOwnInternship, readSingleInternship, createInternship } = internshipSlice.actions;

export default internshipSlice.reducer