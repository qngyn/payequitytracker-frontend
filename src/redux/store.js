import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./features/AuthenticationSlice";
import SalaryReducer from "./features/SalarySlice";

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    salary: SalaryReducer,
  },
});

export default store;
