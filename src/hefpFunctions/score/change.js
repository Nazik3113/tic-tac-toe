import { changePlayers, clearError, setError } from '../../redux/actions';

export default function change(start, players, dispatch) {
  if (start) {
    dispatch(setError("You can't change order while playing the game"));
    setTimeout(() => {
      dispatch(clearError());
    }, 2000);
  } else {
    dispatch(changePlayers(players));
  }
}
