import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobData: null
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        readAllJob: (state, action) => {

        },
        readHisOwnJob: (state, action) => {

        },
        readSingleJob: (state, action) => {

        },
        createJob: (state, action) => {

        }
    }
})

export const { readAllJob, readHisOwnJob, readSingleJob, createJob } = jobSlice.actions;

export default jobSlice.reducer