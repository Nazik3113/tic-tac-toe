import { CHANGE_BOARD, RESTART_START_NEW_GAME } from './types';
import { chooseWinner } from '../hefpFunctions';

const initialState = [
  [
    { fill: null, row: 0, id: 0 },
    { fill: null, row: 0, id: 1 },
    { fill: null, row: 0, id: 2 },
  ],
  [
    { fill: null, row: 1, id: 0 },
    { fill: null, row: 1, id: 1 },
    { fill: null, row: 1, id: 2 },
  ],
  [
    { fill: null, row: 2, id: 0 },
    { fill: null, row: 2, id: 1 },
    { fill: null, row: 2, id: 2 },
  ],
];

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOARD:
      const oldState = state;
      const oldRow = [...state[action.row]];
      const newState = [
        ...oldState.slice(0, action.row),
        [
          ...oldRow.slice(0, action.id),
          { fill: action.turn, row: action.row, id: action.id },
          ...oldRow.slice(action.id + 1),
        ],
        ...oldState.slice(action.row + 1),
      ];
      return newState;
    case RESTART_START_NEW_GAME:
      return [
        [
          { fill: null, row: 0, id: 0 },
          { fill: null, row: 0, id: 1 },
          { fill: null, row: 0, id: 2 },
        ],
        [
          { fill: null, row: 1, id: 0 },
          { fill: null, row: 1, id: 1 },
          { fill: null, row: 1, id: 2 },
        ],
        [
          { fill: null, row: 2, id: 0 },
          { fill: null, row: 2, id: 1 },
          { fill: null, row: 2, id: 2 },
        ],
      ];
    default:
      return state;
  }
};
