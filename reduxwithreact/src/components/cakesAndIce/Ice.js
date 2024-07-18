import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_ICE, SELL_ICE } from "../redux/cake/cakeTypes";

function Ice() {
  const ice = useSelector((state) => state.iceCreamReducer);
  console.log(ice);
  const dispatch = useDispatch();

  const buyOnClick = () => {
    dispatch({ type: BUY_ICE, payload: 1 });
  };

  const sellOnclick = () => {
    dispatch({ type: SELL_ICE, payload: 1 });
  };

  return (
    <div>
      <h1>Ice cream Stock : {ice.numberOfIceCreams}</h1>
      <button onClick={buyOnClick}>Buy</button>
      <button onClick={sellOnclick}>Sell</button>
    </div>
  );
}

export default Ice;
