import React from 'react';
import { Container, Inner, Text, RestartBtn } from './styles/winner';

export default function Winner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Winner.Inner = function WinnerInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Winner.Text = function WinnerText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Winner.RestartBtn = function WinnerRestartBtn({ children, ...restProps }) {
  return <RestartBtn {...restProps}>{children}</RestartBtn>;
};
