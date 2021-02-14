import {
  CHANGE_BOARD,
  CHANGE_PLAYERS,
  CHANGE_TURN,
  CLEAR_ERROR,
  RESTART_START_NEW_GAME,
  SET_ERROR,
  SET_WINNER,
} from './types';

export function changeBoard(row, id, turn) {
  return {
    type: CHANGE_BOARD,
    row,
    id,
    turn,
  };
}

export function changeTurn(turn) {
  return {
    type: CHANGE_TURN,
    turn,
  };
}

export function changePlayers(players) {
  return {
    type: CHANGE_PLAYERS,
    players,
  };
}

export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}

export function restartStartNewGame() {
  return {
    type: RESTART_START_NEW_GAME,
  };
}

export function setWinner(winner) {
  return {
    type: SET_WINNER,
    winner,
  };
}
