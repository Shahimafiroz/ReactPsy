import { BAKE_CAKE, SELL_CAKE_BY_5 } from "./cakeTypes";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BAKE_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };

    case SELL_CAKE_BY_5:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
