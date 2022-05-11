/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { GameReducer, INITIAL_STATE } from "../reducers/GameReducer";

export const GameContext = createContext(null);

export function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
