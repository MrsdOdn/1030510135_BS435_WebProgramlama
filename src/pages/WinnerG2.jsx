import React from 'react';
import { Link } from "react-router-dom";

function WinnerG2() {
  return (
    <div className="error">
      <img src="images/winnerG2.png" alt="winner massege" height={400} />
      <p>you can return home page</p>
      <Link className="linkDecoration" to="/">
        Home
      </Link>
      <p>you can return new game</p>
      <Link className="linkDecoration" to="/game2">
        New game
      </Link>
    </div>
  )
}
export default WinnerG2;