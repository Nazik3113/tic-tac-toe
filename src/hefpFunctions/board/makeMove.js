import {
  changeBoard,
  changeTurn,
  clearError,
  setError,
} from '../../redux/actions';

export default function makeMove(fill, row, id, turn, dispatch, winner) {
  if (winner === 1 || winner === 0) {
    dispatch(setError('The game is ended, start a new game'));
    setTimeout(() => {
      dispatch(clearError());
    }, 2000);
  } else {
    if (fill !== null) {
      dispatch(setError("You can't make a move in already filled cell"));
      setTimeout(() => {
        dispatch(clearError());
      }, 2000);
    } else {
      dispatch(changeBoard(row, id, turn));
      dispatch(changeTurn(turn));
    }
  }
}
