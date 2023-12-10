import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

const GetPlayerPrediction = ({ randomNumber }) => {
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  

  useEffect(() => {
    // Her randomNumber değiştiğinde kullanıcının tahminini kontrol et
    checkUserGuess();
  }, []);

  const checkUserGuess = () => {
    const parsedUserGuess = parseInt(userGuess, 10);
    if(count === 5){
        setCount(0);
        navigate(`/loser`);
    }
    if (!isNaN(parsedUserGuess)) {
       setCount((prev) => prev + 1); 
       
      if (parsedUserGuess > randomNumber) {
        setMessage(userGuess + " " + "Down ⬇️");
      } else if (parsedUserGuess < randomNumber) {
        setMessage(userGuess + " " + "Up ⬆️");
      } else {
        setMessage(userGuess + " " + "Congratulations! You guessed it right!");
        navigate(`/winner`);
        setCount(0);
      }
    } else {
      setMessage("Please enter a number.");
    }
    setUserGuess("");
  };

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  return (
    <div>
      {/* <p>Random number: {randomNumber}</p> */}
      <p>Your remaining vote: {6 - count}</p>
      <p>{message}</p>
      <label>
        Your guess:
        <input type="text" value={userGuess} onChange={handleInputChange} />
      </label>
      <button onClick={checkUserGuess}>Guess</button>
      
    </div>
  );
};

export default GetPlayerPrediction;
