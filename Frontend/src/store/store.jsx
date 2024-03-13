import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import employeeReducer from "./Reducers/employeeSlice";

const store = configureStore({
    reducer: {
        userReducer,
        employeeReducer
    }
});

export default store;
