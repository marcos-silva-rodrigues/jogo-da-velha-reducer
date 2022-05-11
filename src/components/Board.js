import React, { useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { GameContext } from "../contexts/GameContext";
import History from "./History";
import Player from "./Player";
import Reset from "./Reset";
import Square from "./Square";
import Winner from "./Winner";
import calculateWinner from "../utils/calculateWinner";

export default function Board() {
  const {
    state: { squares },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner)
      dispatch({
        type: "UPDATE_WINNER",
        payload: winner,
      });
  }, [squares, dispatch]);

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
