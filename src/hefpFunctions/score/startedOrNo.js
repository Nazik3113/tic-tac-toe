export default function startedOrNo(board) {
  let resArr = [];
  board.forEach((item) => {
    item.forEach((arr) => {
      resArr.push(arr);
    });
  });
  const res = resArr.filter((a) => a.fill !== null);
  if (res.length) {
    return true;
  } else {
    return false;
  }
}
