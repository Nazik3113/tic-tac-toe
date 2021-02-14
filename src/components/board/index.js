import React from 'react';
import {
  BoardContainer,
  Row,
  TopLeft,
  TopCenter,
  TopRight,
  CenterLeft,
  CenterCenter,
  CenterRight,
  BottomLeft,
  BottomCenter,
  BottomRight,
  Inner,
  Circle,
  Cross,
  Line,
} from './styles/board';

export default function Board({ children, ...restProps }) {
  return <BoardContainer {...restProps}>{children}</BoardContainer>;
}

Board.Row = function BoardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Board.TopLeft = function BoardTopLeft({ children, ...restProps }) {
  return <TopLeft {...restProps}>{children}</TopLeft>;
};

Board.TopCenter = function BoardTopCenter({ children, ...restProps }) {
  return <TopCenter {...restProps}>{children}</TopCenter>;
};

Board.TopRight = function BoardTopRight({ children, ...restProps }) {
  return <TopRight {...restProps}>{children}</TopRight>;
};

Board.CenterLeft = function BoardCenterLeft({ children, ...restProps }) {
  return <CenterLeft {...restProps}>{children}</CenterLeft>;
};

Board.CenterCenter = function BoardCenterCenter({ children, ...restProps }) {
  return <CenterCenter {...restProps}>{children}</CenterCenter>;
};

Board.CenterRight = function BoardCenterRight({ children, ...restProps }) {
  return <CenterRight {...restProps}>{children}</CenterRight>;
};

Board.BottomLeft = function BoardBottomLeft({ children, ...restProps }) {
  return <BottomLeft {...restProps}>{children}</BottomLeft>;
};

Board.BottomCenter = function BoardBottomCenter({ children, ...restProps }) {
  return <BottomCenter {...restProps}>{children}</BottomCenter>;
};

Board.BottomRight = function BoardBottomRight({ children, ...restProps }) {
  return <BottomRight {...restProps}>{children}</BottomRight>;
};

Board.Inner = function BoardInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Board.Circle = function BoardCircle({ children, ...restProps }) {
  return <Circle {...restProps}>{children}</Circle>;
};

Board.Cross = function BoardCross({ children, ...restProps }) {
  return (
    <Cross {...restProps}>
      <Line style={{ transform: 'rotate(-47deg) translateY(2px)' }}></Line>
      <Line style={{ transform: 'rotate(47deg) translateY(-2px)' }}></Line>
    </Cross>
  );
};
