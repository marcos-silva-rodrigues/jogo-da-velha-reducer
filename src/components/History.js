import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { GameContext } from "../contexts/GameContext";

export default function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  function handleClick(index) {
    const { squares, isXNext, whoIsWinner } = history[index];
    const newHistory = [...history];
    newHistory.splice(index, history.length);

    const resetState = {
      squares,
      isXNext,
      whoIsWinner,
      history: newHistory,
    };

    dispatch({
      type: "UPDATE_HISTORY",
      payload: resetState,
    });
  }

  return (
    <div>
      {history.map((data, index) => (
        <div className="history" key={uuid()}>
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
