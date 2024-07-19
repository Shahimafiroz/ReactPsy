import React from "react";

function EachUser({ eachUser }) {
  return (
    <div>
      <li>
        <p>
          Hello this is <h2>{eachUser.name} </h2>You can contact me from
          <h2>{eachUser.email}</h2>
        </p>
      </li>
    </div>
  );
}

export default EachUser;
