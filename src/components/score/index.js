import React from 'react';
import { Container, Item, Player } from './styles/score';

export default function Score({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Score.Item = function ScoreItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Score.Player = function ScorePlayer({ children, ...restProps }) {
  return <Player {...restProps}>{children}</Player>;
};
