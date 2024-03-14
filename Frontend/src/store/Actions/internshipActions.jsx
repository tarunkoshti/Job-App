import axios from "axios";
import { readAllInternship, readSingleInternship, createInternship } from "../Reducers/internshipSlice";

export const fetchInternships = () => async (dispatch, getState) => {
    try {
        const response = await axios.get("/api/employe/internship/read/all");
        dispatch(readAllInternship(response.data.internships));
    } catch (error) {
        console.log(error);
    }
}

export const internshipDetail = (id) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`/api/employe/internship/read/${id}`);
        dispatch(readSingleInternship(response.data.internships));
    } catch (error) {
        console.log(error);
    }
}

// export const createInternship = (internshipData) => async (dispatch, getState) => {
//     try {
//         const response = await axios.post(`/api/employe/internship/create`, internshipData);
//         dispatch(createInternship(response.data.internship));
//     } catch (error) {
//         console.log(error);
//     }
// }
