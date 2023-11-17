import React ,{useState} from "react";
import Header from "./Header"
import Footer from "./Footer";
import GameSelect from "./GameSelect";


function App(){
   const [gameSec,setGameSec] = useState("");
   function openGame(){
    
    return;
  }

  return(
    <div>
      <Header />
      <GameSelect />
      <Footer />
    </div>
  );
}

export default App;