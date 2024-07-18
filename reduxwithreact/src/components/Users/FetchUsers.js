import React from "react";
import axios from "axios";
import EachUser from "./EachUser";
import { useState } from "react";

function FetchUsers() {
  const [users, setusers] = useState([]);
  const gettingResponse = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    const apiUsers = response.data;
    setusers(apiUsers);
  };

  console.log("here are the fetched", users);
  return (
    <div>
      <h1>We will be fetching uders here</h1>
      <button onClick={gettingResponse}>get users</button>
    </div>
  );
}

export default FetchUsers;
