import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BAKE_CAKE, SELL_CAKE_BY_5 } from "../redux/cake/cakeTypes";

function Cakes() {
  const numberOfCakesObj = useSelector((state) => state.cakeReducer);

  const dispatch = useDispatch();

  console.log(numberOfCakesObj);
  // console.log(numberOfCakes);

  const handleUpdateCakes = () => {
    dispatch({ type: BAKE_CAKE });
  };

  const handleSellCake = () => {
    if (numberOfCakesObj) dispatch({ type: SELL_CAKE_BY_5, payload: 10 });
  };

  return (
    <div>
      <h1>Shahima Bake a Cake -{numberOfCakesObj.numberOfCakes}</h1>
      <button onClick={handleUpdateCakes}>BakeBake</button>
      <button onClick={handleSellCake}>Sell cake by 5</button>
    </div>
  );
}

export default Cakes;
