/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  // useEffect,
  useReducer,
  // useState,
} from "react";
import PropTypes from "prop-types";
// import calculateWinner from "../utils/calculateWinner";

export const GameContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SQUARES": {
      console.log("actions");
      const { squares, history, isXNext, whoIsWinner } = state;
      const newState = { ...state };

      const newHistory = [
        ...history,
        {
          squares,
          isXNext,
          whoIsWinner,
        },
      ];

      newState.squares = action.payload;
      newState.isXNext = !isXNext;
      newState.whoIsWinner = whoIsWinner;
      newState.history = newHistory;

      return newState;
    }
    default:
      return state;
  }
}

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: null,
  history: [],
};

export function GameContextProvider({ children }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(true);
  // const [whoIsWinner, setWhoIsWinner] = useState(null);
  // const [history, setHistory] = useState([]);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // useEffect(() => {
  //   const winner = calculateWinner(squares);
  //   if (winner) setWhoIsWinner(winner);
  // }, [squares]);

  // function resetGame() {
  //   setSquares(Array(9).fill(null));
  //   setIsXNext(true);
  //   setWhoIsWinner(null);
  //   setHistory([]);
  // }

  // function backToStep(stepIndex) {
  //   const newHistory = [...history];
  //   newHistory.splice(stepIndex, Number.MAX_SAFE_INTEGER);
  //   setHistory(newHistory);

  //   setSquares(history[stepIndex].squares);
  //   setIsXNext(history[stepIndex].isXNext);
  //   setWhoIsWinner(history[stepIndex].whoIsWinner);
  // }

  // const values = useMemo(
  //   () => ({
  //     state,
  //     dispatch,
  //   }),
  //   [state]
  // );

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
