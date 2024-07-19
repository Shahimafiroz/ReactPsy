// import cakeReducer from "./cake/cakeReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./cake/iceCreamReducer";

const rootReducer = combineReducers({
  cakeReducer: cakeReducer,
  iceCreamReducer: iceCreamReducer,
});

// const store = createStore(cakeReducer);
const store = configureStore({
  reducer: rootReducer,
});

export default store;
