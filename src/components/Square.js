import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../contexts/GameContext";

export default function Square({ value, index }) {
  const { handlePlayerAction } = useContext(GameContext);

  return (
    <button type="button" onClick={() => handlePlayerAction(index)}>
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
