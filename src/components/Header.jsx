import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Guess Number
      </h1>
    </header>
  );
}

export default Header;
