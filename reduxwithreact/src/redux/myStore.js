import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { LOADING, SETDATA, DISPLAYERROR } from "./users/actionTypes";
// import reducer from "../redux/users/userReducer";
import usersReducer from "../redux/users/userReducer";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
});

const myStore = configureStore({
  reducer: rootReducer,
});

export default myStore;
