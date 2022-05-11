import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { GameContext } from "../contexts/GameContext";
import History from "./History";
import Player from "./Player";
import Reset from "./Reset";
import Square from "./Square";
import Winner from "./Winner";

export default function Board() {
  const { squares } = useContext(GameContext);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>
      <History />
    </div>
  );
}
