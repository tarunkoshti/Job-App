import axios from "axios";
import { setResume } from "../Reducers/resumeSlice";


export const getStudentResume = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/resume/${id}`)
        const { updatedResume } = data
        console.log(data)
        dispatch(setResume({ updatedResume }))
    } catch (error) {
        console.log(error)
    }
}

export const setStudentResume = (id) => async (dispatch, getState) => {
    try {
        // const { data } = await axios.get(`/api/resume/${id}`)
        // const { updatedResume } = data
        // console.log(data)
        dispatch(setResume(null))
    } catch (error) {
        console.log(error)
    }
}


export const getStudentInfo = (id )=> async(dispatch,getState)=>{
    try {
        const {data} = await axios.get(`/api/resume/student/${id}`)
        const {student} = data;
        dispatch(setResume({student}))
    } catch (error) {
        console.log(error)
    }
}