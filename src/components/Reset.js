import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function Reset() {
  const { resetGame } = useContext(GameContext);

  return (
    <p className="reset">
      <button type="button" onClick={resetGame}>
        Reset
      </button>
    </p>
  );
}
