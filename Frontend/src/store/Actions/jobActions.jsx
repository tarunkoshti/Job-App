import axios from "axios";
import { readAllJob, readSingleJob, createJob } from "../Reducers/jobSlice";

export const fetchJobs = () => async (dispatch, getState) => {
    try {
        const response = await axios.get("/api/employe/job/read/all");
        dispatch(readAllJob(response.data.jobs));
    } catch (error) {
        console.log(error);
    }
}

export const jobDetail = (id) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`/api/employe/job/read/${id}`);
        dispatch(readSingleJob(response.data.jobs));
    } catch (error) {
        console.log(error);
    }
}

// export const createjob = (jobData) => async (dispatch, getState) => {
//     try {
//         const response = await axios.post(`/api/employe/job/create`, jobData);
//         dispatch(createJob(response.data.job));
//     } catch (error) {
//         console.log(error);
//     }
// }