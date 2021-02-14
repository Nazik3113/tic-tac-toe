export default function chooseWinnerForContainer(players, winner) {
  if (winner === 1) {
    if (players.player1 === 1) {
      return '1st player win, congrats';
    } else {
      return '2nd player win, congrats';
    }
  } else {
    if (players.player1 === 0) {
      return '1st player win, congrats';
    } else {
      return '2nd player win, congrats';
    }
  }
}
