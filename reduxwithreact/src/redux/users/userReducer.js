import { LOADING, SETDATA, DISPLAYERROR } from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "no error",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SETDATA:
      return {
        ...state,
        data: action.payload,
      };

    case DISPLAYERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
