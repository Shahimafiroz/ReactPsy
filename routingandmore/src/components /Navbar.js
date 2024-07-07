import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "",
      }}
    >
      <div>
        <h1>LOGO</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p style={{ padding: "1rem" }}>
          {" "}
          <Link to="/">Home</Link>
        </p>
        <p style={{ padding: "1rem" }}>
          <Link to="/about">About</Link>
        </p>
        <p style={{ padding: "1rem" }}>
          <Link to="/contact">contact us</Link>
        </p>
        <p style={{ padding: "1rem" }}>
          <Link to="/order">Order</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
