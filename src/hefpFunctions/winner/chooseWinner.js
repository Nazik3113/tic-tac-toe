export default function chooseWinner(board) {
  let xArr = [];
  let yArr = [];
  board.forEach((arr) => {
    arr.forEach((el) => {
      if (el.fill === 1) {
        xArr.push(el);
      }
      if (el.fill === 0) {
        yArr.push(el);
      }
    });
  });
  for (let i = 0; i <= 3; i++) {
    if (xArr.filter((a) => a.row === i).length === 3) {
      return 1;
    } else if (xArr.filter((a) => a.id === i).length === 3) {
      return 1;
    }
  }
  for (let i = 0; i <= 3; i++) {
    if (yArr.filter((a) => a.row === i).length === 3) {
      return 0;
    } else if (yArr.filter((a) => a.id === i).length === 3) {
      return 0;
    }
  }
  if (
    board[0][0].fill === board[1][1].fill &&
    board[1][1].fill === board[2][2].fill &&
    board[0][0].fill !== null
  ) {
    return board[0][0].fill;
  } else if (
    board[0][2].fill === board[1][1].fill &&
    board[1][1].fill === board[2][0].fill &&
    board[0][2].fill !== null
  ) {
    return board[0][2].fill;
  }
  return null;
}
