import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { GameContext } from "../contexts/GameContext";

export default function History() {
  const { history, backToStep } = useContext(GameContext);

  return (
    <div>
      {history.map((data, index) => (
        <div className="history" key={uuid()}>
          <button type="button" onClick={() => backToStep(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
