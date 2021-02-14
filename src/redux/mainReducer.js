import { combineReducers } from 'redux';
import { playersReducer } from './playersReducer';
import { boardReducer } from './boardReducer';
import { errorReducer } from './errorReducer';
import { winnerReducer } from './winnerReducer';

export const mainReducer = combineReducers({
  players: playersReducer,
  board: boardReducer,
  error: errorReducer,
  winner: winnerReducer,
});
