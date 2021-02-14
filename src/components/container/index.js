import React from 'react';
import { ToeContainer } from './styles/container';

export default function Container({ children, ...restProps }) {
  return <ToeContainer {...restProps}>{children}</ToeContainer>;
}
