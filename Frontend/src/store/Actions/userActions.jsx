import axios from "axios";
import { login, logout } from "../Reducers/userSlice";

export const currentUser = () => async (dispatch, getState) => {
    try {
        const { data: userData } = await axios.get('/api/user/student')
        dispatch(login({ userData }))
    } catch (error) {
        console.log(error.message)
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