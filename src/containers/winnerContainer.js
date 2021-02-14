import React, { useEffect } from 'react';
import { Winner } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { restartStartNewGame, setWinner } from '../redux/actions';
import { chooseWinnerForContainer, chooseWinner } from '../hefpFunctions';
import { startedOrNo } from '../hefpFunctions';

export function WinnerContainer() {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.winner);
  const players = useSelector((state) => state.players);
  const board = useSelector((state) => state.board);

  useEffect(() => {
    if (chooseWinner(board) === 1) {
      dispatch(setWinner(1));
    }
    if (chooseWinner(board) === 0) {
      dispatch(setWinner(0));
    }
  }, [board]);

  return (
    <>
      {startedOrNo(board) ? (
        <Winner>
          <Winner.Inner>
            {winner.winner === null ? (
              <Winner.RestartBtn
                onClick={() => dispatch(restartStartNewGame())}
              >
                Restart
              </Winner.RestartBtn>
            ) : (
              <>
                <Winner.Text
                  style={
                    winner.winner === 1
                      ? { color: '#f7996e' }
                      : { color: '#712f79' }
                  }
                >
                  {chooseWinnerForContainer(players, winner.winner)}
                </Winner.Text>
                <Winner.RestartBtn
                  onClick={() => dispatch(restartStartNewGame())}
                >
                  Start a new game
                </Winner.RestartBtn>
              </>
            )}
          </Winner.Inner>
        </Winner>
      ) : null}
    </>
  );
}
