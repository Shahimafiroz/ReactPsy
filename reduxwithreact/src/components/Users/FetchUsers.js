import React from "react";
import axios from "axios";
import EachUser from "./EachUser";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LOADING, SETDATA, DISPLAYERROR } from "../../redux/users/actionTypes";

function FetchUsers() {
  // reducer ------------------------------>
  const { data, error, loading } = useSelector((state) => state.usersReducer);
  console.log("this is a reducer data ", data);
  console.log("this is a reducer error", error);
  console.log("this is a reducer loading ", loading);
  const dispatch = useDispatch();
  // reduce--->
  const [showUsers, setshowUsers] = useState(false);

  const gettingResponse = async () => {
    dispatch({ type: LOADING, payload: true });
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    const apiUsers = response.data;
    if (response.data) {
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: SETDATA, payload: apiUsers });
    } else {
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: DISPLAYERROR, payload: "Page Not Found" });
    }
  };

  // console.log("here are the fetched", users);
  return (
    <div>
      <h1>We will be fetching users here</h1>
      <button onClick={gettingResponse}>get users</button>
      {/* {showUsers ? (
        <>
          {data.map((eachUser) => (
            <EachUser eachUser={eachUser} />
          ))}
        </>
      ) : (
        <></>
      )} */}

      {loading ? (
        <h1>{"Loading data"}</h1>
      ) : (
        <>
          {data.map((eachUser) => (
            <EachUser eachUser={eachUser} />
          ))}
        </>
      )}
    </div>
  );
}

export default FetchUsers;
