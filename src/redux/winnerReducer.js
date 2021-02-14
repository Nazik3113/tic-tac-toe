import { RESTART_START_NEW_GAME, SET_WINNER } from './types';

const initialState = {
  winner: null,
};

export const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTART_START_NEW_GAME:
      return {
        ...state,
        winner: null,
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    default:
      return state;
  }
};
