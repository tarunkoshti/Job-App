import axios from "axios";
import { login, logout } from "../Reducers/userSlice";
import { readHisOwnInternship } from "../Reducers/internshipSlice";
export const currentUser = () => async (dispatch, getState) => {
    try {
        const { data: userData } = await axios.get('/api/user/student')
        if (userData.student) {
            dispatch(login({ userData }))
        }
    } catch (error) {
        // console.log(error.message)
    }
}

export const asyncSignup = (userData) => async (dispatch, getState) => {
    try {
        await axios.post('/api/user/student/signup', userData)
        dispatch(currentUser())
    } catch (error) {
        console.log(error.message)
    }
}

export const asyncLogin = (userData) => async (dispatch, getState) => {
    try {
        await axios.post('/api/user/student/signin', userData)
        dispatch(currentUser())
    } catch (error) {
        console.log(error.message)
    }
}

export const asyncLogout = () => async (dispatch, getState) => {
    try {
        await axios.get('/api/user/student/signout')
        dispatch(logout())
    } catch (error) {
        console.log(error.message)
    }
}
export const asyncUploadProfileImage = (id, imageFile) => async (dispatch, getState) => {
    try {
        console.log("one")
        await axios.post(`/api/user/student/avatar/${id}`, imageFile)
        console.log("two")
        dispatch(currentUser())
    } catch (error) {
        console.log(error.message)
    }
}

export const allapplyinternship = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/api/user/student/internship/read', id)
        console.log(data)
        dispatch(readHisOwnInternship({ data }))
    } catch (error) {
        console.log(error.message)
    }
}