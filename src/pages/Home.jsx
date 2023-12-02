import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import GameSelect from "../components/GameSelect";


function Home(){

  return(
    <div>
      <Header />
      <GameSelect />
      <Footer />
    </div>
  );
}

export default Home;