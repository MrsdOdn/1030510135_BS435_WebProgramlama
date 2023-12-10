import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetPlayerPrediction from "../components/GetPlayerPrediction";

function Game1() {
  const [randomNumber, setRandomNumber] = useState(null);
  const gameInformationAlert = () => {
    alert(
      "You have 6 rights in the game. The number you guess is between 0-100. You will receive information up and down depending on the number you entered."
    );
  };

  useEffect(() => {
    generateRandomNumber();
  }, []); // sayfa yüklendiğinde bir kez çağrılır

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında rastgele sayı üretme
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <Header />
      <div className="container gamestyle center game1">
        <h1>Game1</h1>
        <GetPlayerPrediction randomNumber={randomNumber} />
        {/* <button onClick={generateRandomNumber}>New Game</button> */}
        {randomNumber !== null && console.log(randomNumber)}
        <button onClick={gameInformationAlert}>HowToPlay</button>
      </div>
      <Footer />
    </div>
  );
}
export default Game1;
