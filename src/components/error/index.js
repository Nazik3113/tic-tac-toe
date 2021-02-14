import React from 'react';
import { Container, Text, Close, Inner } from './styles/error';

export default function Error({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Error.Text = function ErrorText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Error.Inner = function ErrorInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Error.Close = function ErrorClose({ ...restProps }) {
  return <Close {...restProps} />;
};
