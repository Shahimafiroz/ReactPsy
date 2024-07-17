import React from "react";
import { Link } from "react-router-dom";

function PageNotFOund() {
  return (
    <div>
      <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.webp" />
      <div>
        <button>
          <Link to="/"> GO BACK TO HOME PAGE</Link>
        </button>
      </div>
    </div>
  );
}

export default PageNotFOund;
