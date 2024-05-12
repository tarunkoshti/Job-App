import axios from "axios";

const instance = axios.create({
    baseURL: "https://job-app-api-gamma.vercel.app",
    withCredentials: true,
});

export default instance;
