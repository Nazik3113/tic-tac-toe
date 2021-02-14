import { CHANGE_PLAYERS, CHANGE_TURN, RESTART_START_NEW_GAME } from './types';

const initialState = {
  player1: 1,
  player2: 0,
  turn: 1,
};

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TURN:
      return {
        ...state,
        turn: action.turn ? 0 : 1,
      };
    case CHANGE_PLAYERS:
      return {
        turn: action.players.player2,
        player1: action.players.player2,
        player2: action.players.player1,
      };
    case RESTART_START_NEW_GAME:
      return {
        player1: 1,
        player2: 0,
        turn: 1,
      };
    default:
      return state;
  }
};
