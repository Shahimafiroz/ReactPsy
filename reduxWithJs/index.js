const redux = require("redux");
const createStore = redux.createStore;
const combine = redux.combineReducers;

//---------------Action------------------//

const BAKE_A_CAKE = "BAKE_A_CAKE";
const SELL_A_CAKE = "SELL_A_CAKE";
const MAKE_AN_ICECREAM = "MAKE_AN_ICECREAM";

// {
//     type:'BAKE_A_CAKE',
//     info: 'Ask shahima to bake a cake'
// }

function askShahimaToBakeACakeOnceMore() {
  return {
    type: "BAKE_A_CAKE",
    info: "Ask shahima to bake a cake",
  };
}

function askShahimaToSellACake() {
  return {
    type: "SELL_A_CAKE",
    info: "Ask Shahima to sell the cakes",
  };
}

function shahimaMakeAnIceCream() {
  return {
    type: "MAKE_AN_ICECREAM",
    info: "Ask Shahima to make an icecream",
  };
}
// Arrow function

const askShahimaToBakeACake = () => {
  return {
    type: "BAKE_A_CAKE",
    info: "Ask shahima to bake a cake",
  };
};

//----------- reducer ----------------//

// multipel reducers

const initialcakeState = {
  numOfCakes: 10,
};

const initialiceCreamState = {
  numofIce: 15,
};

const cakeReducer = (state = initialcakeState, action) => {
  switch (action.type) {
    case BAKE_A_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialiceCreamState, action) => {
  switch (action.type) {
    case MAKE_AN_ICECREAM:
      return {
        ...state,
        numofIce: state.numofIce + 1,
      };

    default:
      return state;
  }
};
// combining the reducers
const rootReducer = combine({
  cake: cakeReducer,
  ice: iceCreamReducer,
});
// implementing the reducers

const combinedStore = createStore(rootReducer); // pasing the combined reducers

const unsubsfromCombStore = combinedStore.subscribe(() =>
  console.log("this is from combined state cakes", combinedStore.getState())
);

combinedStore.dispatch(askShahimaToBakeACake());
combinedStore.dispatch(shahimaMakeAnIceCream());

// console.log(
//   "this is cakes",
//   cakeReducer.state.cake.numOfCakes,
//   "this is ice creams",
//   iceCreamReducer.state.ice.numofIce
// );

unsubsfromCombStore();

// combine multipel reducers to call them

/*  -- example of using singel reducer

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
}; // singel state object 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BAKE_A_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    case SELL_A_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case MAKE_AN_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      };
    default:
      return state;
  }
};// singel reducer multiple cases

using the reducer 

const store = createStore(reducer);
console.log("getting the store state : ", store.getState());
const unsubcribe = store.subscribe(() =>
  console.log("getting the updated state from subscribe :", store.getState())
);


*/

//.............. redux .....................//

// const store = createStore(reducer);
// console.log("getting the store state : ", store.getState());
// const unsubcribe = store.subscribe(() =>
//   console.log("getting the updated state from subscribe :", store.getState())
// );

// store.dispatch(askShahimaToBakeACake());
// store.dispatch(askShahimaToBakeACake());

// store.dispatch(askShahimaToSellACake());
// store.dispatch(askShahimaToSellACake());

// store.dispatch(shahimaMakeAnIceCream());
// store.dispatch(shahimaMakeAnIceCream());

// const store = createStore(reducer);
// // 1.getting the store state
// console.log(" getting hte store state", store.getState());
// // store.subscribe(()=>(console.log("updated state from subscribe : " , store.getState())))
// const unsubscribe = store.subscribe(() =>
//   console.log("updated state from subscribe : ", store.getState())
// );
// store.dispatch(askShahimaToBakeACake());
// store.dispatch(askShahimaToBakeACake());
// store.dispatch(askShahimaToBakeACake());
// store.dispatch(askShahimaToBakeACakeOnceMore());

// unsubscribe();
