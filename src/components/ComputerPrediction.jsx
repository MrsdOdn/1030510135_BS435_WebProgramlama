import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ComputerPrediction() {
  const [guessNumber, setGuessNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [maxNumber, setMaxNumber] = useState(100);
  const [minNumber, setMinNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    generateRandomNumber();
  }, []); // sayfa yüklendiğinde bir kez çağrılır

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında rastgele sayı üretme
    setRandomNumber(newRandomNumber);
  };

  function handleClickUp() {
    if (guessNumber !== null) {
      setMinNumber(guessNumber);
      const newNumber = Math.floor((maxNumber - guessNumber) / 2) + guessNumber;
      console.log("guessU: " + guessNumber);
      console.log("maxU: " + maxNumber);
      console.log("minU: " + minNumber);
      console.log("newU: " + newNumber);
      setGuessNumber(newNumber);
      console.log("guesnewU: " + guessNumber);
    }
    
  }
  function handleClickDown() {
    if (guessNumber !== null) {
      setMaxNumber(guessNumber);
      const newNumber = Math.floor((guessNumber - minNumber) / 2) + minNumber;
      console.log("guessD: " + guessNumber);
      console.log("maxD: " + maxNumber);
      console.log("minD: " + minNumber);
      console.log("newD: " + newNumber);
      setGuessNumber(newNumber);
      console.log("guesnewD: " + guessNumber);
    }
  }
  function handleClickStart() {
    if (guessNumber === null) {
      setGuessNumber(randomNumber);
    }
  }

  return (
    <div>
      <button onClick={handleClickStart}>Start</button>
      <p>
        Computer guess:<button className="buttonGuess">{guessNumber}</button>
      </p>
      <button onClick={handleClickUp}>Up ⬆️</button>
      <button onClick={handleClickDown}>Down ⬇️</button>
      <button onClick={() => navigate("/winnerg2")}>Win</button>
    </div>
  );
}
export default ComputerPrediction;
/* Math.floor((maxNumber - minNumber)/2+minNumber) */
