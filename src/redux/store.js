import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./features/AuthenticationSlice";
import SalaryReducer from "./features/SalarySlice";
import UserProfileReducer from "./features/UserProfileSlice";

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    salary: SalaryReducer,
    userProfile: UserProfileReducer,
  },
});

export default store;
