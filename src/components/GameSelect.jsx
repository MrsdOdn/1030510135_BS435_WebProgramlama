import React, {useState}from "react";

function GameSelect(){

  const [gameMode, setGameMode] = useState("");

  function handleClick1(){
    setGameMode("game1");
  }
  function handleClick2(){
    setGameMode("game2");
  }

  return(
    <div className="container selectGame">
      <h2>Choose game mode</h2>
      <div className="selectGameGrid">
        <div className="firstGame">
          <button onClick={handleClick1}>Game1</button>
          <p>Do you want to guess the number?</p>
        </div> 
        <div className="secondGame">
          <button onClick={handleClick2}>Game2</button>
          <p>Do you want them to guess your number?</p>
        </div>
      </div>    
    </div>
 );
}

export default GameSelect;