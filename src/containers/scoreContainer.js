import React, { useState, useEffect } from 'react';
import { Score } from '../components';
import { Board } from '../components';
import CachedIcon from '@material-ui/icons/Cached';
import { useDispatch, useSelector } from 'react-redux';
import { startedOrNo, change } from '../hefpFunctions';

export function ScoreContainer() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
  const board = useSelector((state) => state.board);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(startedOrNo(board));
  }, [board]);

  return (
    <Score
      style={
        startedOrNo(board) ? { marginBottom: '20px' } : { marginBottom: '50px' }
      }
    >
      <Score.Item
        style={
          players.turn ? { background: '#415d43' } : { background: '#191919' }
        }
      >
        <Score.Player>
          {players.player1 ? '1st player' : '2nd player'}
        </Score.Player>
        <Board.Cross></Board.Cross>
      </Score.Item>
      <CachedIcon
        style={{
          fontSize: 40,
          cursor: 'pointer',
          margin: '0 10px',
          color: '#fff',
        }}
        onClick={() => change(start, players, dispatch)}
      />
      <Score.Item
        style={
          players.turn ? { background: '#191919' } : { background: '#415d43' }
        }
      >
        <Score.Player>
          {players.player2 ? '1st player' : '2nd player'}
        </Score.Player>
        <Board.Circle />
      </Score.Item>
    </Score>
  );
}
