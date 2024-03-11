import axios from "axios";
import { login, logout } from "../Reducers/userSlice";

export const currentUser = () => async (dispatch, getState) => {
    try {
        const { userData } = await axios.get('/api/user/student')
        dispatch(login({ userData }))
    } catch (error) {
        console.log(error.message)
    }
}