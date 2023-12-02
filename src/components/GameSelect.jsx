import React from "react";
import {useNavigate } from "react-router-dom";

function GameSelect() {
  const navigate = useNavigate();

  return (
    <div className="container selectGame">
      <h2>Choose game mode</h2>
      <div className="selectGameGrid">
        <div className="firstGame">
          <button onClick={() => navigate("/game1")}>Game1</button>
          <p>Do you want to guess the number?</p>
        </div>
        <div className="secondGame">
          <button onClick={() => navigate("/game2")}>Game2</button>
          <p>Do you want them to guess your number?</p>
        </div>
      </div>
    </div>
  );
}

export default GameSelect;
