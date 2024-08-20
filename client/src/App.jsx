import React from "react";
import { Route, Routes } from "react-router-dom";
import Lobby from "./screens/Lobby";
import Room from "./screens/Room";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
};

export default App;
