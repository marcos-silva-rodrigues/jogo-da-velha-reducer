import React from "react";
import Board from "../components/Board";
import { GameContextProvider } from "../contexts/GameContext";
import "./Home.css";

export default function Home() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}
