import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../contexts/GameContext";

export default function Square({ value, index }) {
  const {
    state: { squares, whoIsWinner, isXNext },
    dispatch,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    dispatch({
      type: "UPDATE_SQUARES",
      payload: newSquares,
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: PropTypes.string,
  index: PropTypes.number.isRequired,
};
