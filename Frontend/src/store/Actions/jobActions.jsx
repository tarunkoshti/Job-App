import axios from "axios";
import { readAllJob, readSingleJob, createJob } from "../Reducers/jobSlice";

export const fetchJobs = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/api/employe/job/read/all")
        const { jobs } = data
        dispatch(readAllJob({ jobs }));
    } catch (error) {
        console.log(error);
    }
}

export const jobDetail = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/user/student/job/read/${id}`)
        
        console.log(data)
        const { job } = data
        dispatch(readSingleJob({ job }));
    } catch (error) {
        console.log(error);
    }
}

// export const createjob = (jobData) => async (dispatch, getState) => {
//     try {
//         const { data } = await axios.post(`/api/employe/job/create`, jobData)
//         const { job } = data
//         dispatch(createJob({ job }));
//     } catch (error) {
//         console.log(error);
//     }
// }