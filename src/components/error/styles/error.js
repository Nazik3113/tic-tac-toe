import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';

export const Container = styled.div`
  width: 270px;
  height: 60px;
  position: absolute;
  right: 0;
  top: 10%;
  background-color: #ba2d0b;
  border-radius: 2px;
  z-index: 100;
  transition: transform 0.3s ease;
  transform: translateX(100%);
`;

export const Inner = styled.div`
  position: relative;
  height: inherit;
  display: flex;
  align-items: center;
  padding: 0 40px;
`;

export const Text = styled.h4`
  color: #fff;
  margin: 0 auto;
`;

export const Close = styled(CancelIcon)`
  position: absolute;
  top: 7px;
  left: 7px;
  cursor: pointer;
  color: #fff;
`;
