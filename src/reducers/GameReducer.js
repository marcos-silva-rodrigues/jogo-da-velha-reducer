export const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: null,
  history: [],
};

export function GameReducer(state, action) {
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
