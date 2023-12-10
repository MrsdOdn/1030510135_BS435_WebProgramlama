import React from 'react';
import { Link } from "react-router-dom";

function Winner() {
  return (
    <div className="error">
      <img src="images/winner.png" alt="winner massege" />
      <p>you can return home page</p>
      <Link className="linkDecoration" to="/">
        Home
      </Link>
      <p>you can return new game</p>
      <Link className="linkDecoration" to="/game1">
        New game
      </Link>
    </div>
  )
}
export default Winner;