import { BUY_ICE, SELL_ICE } from "./cakeTypes";

const initialState = {
  numberOfIceCreams: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    case SELL_ICE:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
