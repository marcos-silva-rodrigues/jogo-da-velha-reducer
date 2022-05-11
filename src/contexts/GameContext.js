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

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: null,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SQUARES": {
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
    case "UPDATE_WINNER": {
      return {
        ...state,
        whoIsWinner: action.payload,
      };
    }
    case "UPDATE_HISTORY": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
