import axios from "axios";
import { login, logout } from "../Reducers/employeeSlice";

export const currentUser = () => async (dispatch, getState) => {
    try {
        const { data: employeeData } = await axios.get('/api/employe/current')
        console.log()
        if (employeeData.employe) {
            dispatch(login({ employeeData }))
        }
    } catch (error) {
        // console.log(error.message)
    }
}

export const asyncSignup = (employeeData) => async (dispatch, getState) => {
    try {
        await axios.post('/api/employe/signup', employeeData)
        dispatch(currentUser())
    } catch (error) {
        console.log(error.message)
    }
}

export const asyncLogin = (employeeData) => async (dispatch, getState) => {
    try {
        await axios.post('/api/employe/signin', employeeData)
        dispatch(currentUser())
    } catch (error) {
        console.log(error.message)
    }
}
export const asyncLogout = () => async (dispatch, getState) => {
    try {
        await axios.get('/api/employe/signout')
        dispatch(logout())
    } catch (error) {
        console.log(error.message)
    }
}