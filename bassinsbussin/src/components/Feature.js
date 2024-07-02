import React from "react";
import cupcakeicons from "./assets/png/001-cupcake.png";
import seafoodicons from "./assets/png/003-seafood.png";
import meat from "./assets/png/002-chicken-leg.png";
import veggies from "./assets/png/004-veggie.png";
import drinks from "./assets/png/005-drink.png";
export default function Feature() {
  return (
    <div
      style={{
        fontFamily: "Dancing Script",
        marginTop: "30px",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "auto",
          width: "80%",
          alignSelf: "center",
        }}
      >
        <div>
          <div
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
              background: "#FDE4C7",
            }}
            className="test"
          >
            <img src={meat} />
          </div>

          <p
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              color: "#763f25",
            }}
          >
            Meat
          </p>
        </div>

        <div>
          <div
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
              background: "#FDE4C7",
            }}
            className="test"
          >
            <img src={seafoodicons} />
          </div>

          <p
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              color: "#763f25",
            }}
          >
            SeaFood
          </p>
        </div>
        <div>
          <div
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
              background: "#FDE4C7",
            }}
            className="test"
          >
            <img src={veggies} />
          </div>

          <p
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              color: "#763f25",
            }}
          >
            Veggies
          </p>
        </div>
        <div>
          <div
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
              background: "#FDE4C7",
            }}
            className="test"
          >
            <img src={cupcakeicons} />
          </div>

          <p
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              color: "#763f25",
            }}
          >
            Cakes
          </p>
        </div>
        <div>
          <div
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100px",
              background: "#FDE4C7",
            }}
            className="test"
          >
            <img src={drinks} />
          </div>

          <p
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              color: "#763f25",
            }}
          >
            Drinks
          </p>
        </div>
      </div>
    </div>
  );
}
