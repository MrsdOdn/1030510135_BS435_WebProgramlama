import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <img src="images/errorPage.png" alt="error massege" />
      <p>you can return home page</p>
      <Link className="linkDecoration" to="/">
        Home
      </Link>
    </div>
  );
}
export default Error;
