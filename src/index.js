import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
