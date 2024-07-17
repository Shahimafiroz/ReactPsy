const redux = require("redux");
const createStore = redux.createStore;
const applyMiddelware = redux.applyMiddleware;
const thunk = require("redux-thunk").default;
const axios = require("axios");

// INITIAL STATE

const initialState = {
  loading: false,
  data: [],
  error: "",
};

// DECLARING THE CONSTANTS FOR ACTION TYpES

const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// CREATING OUR ACTION CREATORS

const fetchUsers = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  console.log(response);
};

fetchUsers();

const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS",
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: data,
  };
};

const fetchUsersError = (error) => {
  return {
    type: "FETCH_USERS_ERROR",
    payload: error,
  };
};

// DEFINING OUR REDUCER FUNCTION  ----> WHAT HAPPERS WHEN THE ACTION IS TRIGGERD

const reducerFunction = (state = initialState, action) => {
  switch (action.state) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        data: "",
        error: action.payload,
      };
  }
};

const store = createStore(reducerFunction, applyMiddelware(thunk));
