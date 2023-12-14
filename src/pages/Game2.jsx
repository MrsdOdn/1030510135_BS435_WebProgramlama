import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Game2() {
  return (
    <div>
      <Header />
      <div className="container gamestyle center game1">
        <h1>Game2</h1>
        <button onClick={gameInformationAlert}>HowToPlay</button>
      </div>
      <Footer />
    </div>
  );
}
export default Game2;
