import React, { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import calculateWinner from "../utils/calculateWinner";

export const GameContext = createContext(null);

export function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) setWhoIsWinner(winner);
  }, [squares]);

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner(null);
    setHistory([]);
  }

  function backToStep(stepIndex) {
    const newHistory = [...history];
    newHistory.splice(stepIndex, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[stepIndex].squares);
    setIsXNext(history[stepIndex].isXNext);
    setWhoIsWinner(history[stepIndex].whoIsWinner);
  }

  function handlePlayerAction(positionSquare) {
    if (squares[positionSquare]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[positionSquare] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([
      ...history,
      {
        squares: [...squares],
        isXNext,
        whoIsWinner,
      },
    ]);
  }

  const states = useMemo(
    () => ({
      squares,
      setSquares,
      isXNext,
      setIsXNext,
      whoIsWinner,
      setWhoIsWinner,
      history,
      setHistory,
      resetGame,
      backToStep,
      handlePlayerAction,
    }),
    [squares, isXNext, whoIsWinner, history]
  );

  return <GameContext.Provider value={states}>{children}</GameContext.Provider>;
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
