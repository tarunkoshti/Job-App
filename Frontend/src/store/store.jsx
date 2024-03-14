import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import employeeReducer from "./Reducers/employeeSlice";
import internshipReducer from "./Reducers/internshipSlice";
import jobReducer from "./Reducers/jobSlice";

const store = configureStore({
    reducer: {
        userReducer,
        employeeReducer,
        internshipReducer,
        jobReducer
    }
});

export default store;
