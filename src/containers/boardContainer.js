import React, { useEffect, useState } from 'react';
import { Board } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { makeMove, chooseWinner } from '../hefpFunctions';
import { WinnerContainer } from '../containers/winnerContainer';

export function BoardContainer() {
  const dispatch = useDispatch();
  const dataArr = useSelector((state) => state.board);
  const turn = useSelector((state) => state.players.turn);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (chooseWinner(dataArr) === 1) {
      setWinner(1);
    }
    if (chooseWinner(dataArr) === 0) {
      setWinner(0);
    }
    if (chooseWinner(dataArr) === null) {
      setWinner(null);
    }
  }, [dataArr]);

  return (
    <>
      <WinnerContainer />
      <Board>
        <Board.Row>
          <Board.TopLeft
            bg={dataArr[0][0].fill}
            onClick={() =>
              makeMove(
                dataArr[0][0].fill,
                dataArr[0][0].row,
                dataArr[0][0].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[0][0].fill === 1 && <Board.Cross />}
              {dataArr[0][0].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.TopLeft>
          <Board.TopCenter
            bg={dataArr[0][1].fill}
            onClick={() =>
              makeMove(
                dataArr[0][1].fill,
                dataArr[0][1].row,
                dataArr[0][1].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[0][1].fill === 1 && <Board.Cross />}
              {dataArr[0][1].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.TopCenter>
          <Board.TopRight
            bg={dataArr[0][2].fill}
            onClick={() =>
              makeMove(
                dataArr[0][2].fill,
                dataArr[0][2].row,
                dataArr[0][2].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[0][2].fill === 1 && <Board.Cross />}
              {dataArr[0][2].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.TopRight>
        </Board.Row>
        <Board.Row>
          <Board.CenterLeft
            bg={dataArr[1][0].fill}
            onClick={() =>
              makeMove(
                dataArr[1][0].fill,
                dataArr[1][0].row,
                dataArr[1][0].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[1][0].fill === 1 && <Board.Cross />}
              {dataArr[1][0].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.CenterLeft>
          <Board.CenterCenter
            bg={dataArr[1][1].fill}
            onClick={() =>
              makeMove(
                dataArr[1][1].fill,
                dataArr[1][1].row,
                dataArr[1][1].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[1][1].fill === 1 && <Board.Cross />}
              {dataArr[1][1].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.CenterCenter>
          <Board.CenterRight
            bg={dataArr[1][2].fill}
            onClick={() =>
              makeMove(
                dataArr[1][2].fill,
                dataArr[1][2].row,
                dataArr[1][2].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[1][2].fill === 1 && <Board.Cross />}
              {dataArr[1][2].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.CenterRight>
        </Board.Row>
        <Board.Row>
          <Board.BottomLeft
            bg={dataArr[2][0].fill}
            onClick={() =>
              makeMove(
                dataArr[2][0].fill,
                dataArr[2][0].row,
                dataArr[2][0].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[2][0].fill === 1 && <Board.Cross />}
              {dataArr[2][0].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.BottomLeft>
          <Board.BottomCenter
            bg={dataArr[2][1].fill}
            onClick={() =>
              makeMove(
                dataArr[2][1].fill,
                dataArr[2][1].row,
                dataArr[2][1].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[2][1].fill === 1 && <Board.Cross />}
              {dataArr[2][1].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.BottomCenter>
          <Board.BottomRight
            bg={dataArr[2][2].fill}
            onClick={() =>
              makeMove(
                dataArr[2][2].fill,
                dataArr[2][2].row,
                dataArr[2][2].id,
                turn,
                dispatch,
                winner
              )
            }
          >
            <Board.Inner>
              {dataArr[2][2].fill === 1 && <Board.Cross />}
              {dataArr[2][2].fill === 0 && <Board.Circle />}
            </Board.Inner>
          </Board.BottomRight>
        </Board.Row>
      </Board>
    </>
  );
}
