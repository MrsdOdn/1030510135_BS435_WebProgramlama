import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComputerPrediction from "../components/ComputerPrediction";

function Game2() {
  const gameInformationAlert = () => {
    alert(
      "Keep a number in mind. If the number the computer guesses is larger than the number you kept, press the down button. If the number is smaller, press the up button. If you guessed correctly, press the win button."
    );
  };
  return (
    <div>
      <Header />
      <div className="container gamestyle center game1">
        <h1>Game2</h1>
        <p>Keep a number in mind.</p>
        <ComputerPrediction />
        <button onClick={gameInformationAlert}>HowToPlay</button>
      </div>
      <Footer />
    </div>
  );
}
export default Game2;
