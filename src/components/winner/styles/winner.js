import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 230px;
  height: 26px;
  margin-bottom: 20px;
  overflow-x: hidden;
`;

export const Inner = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.h3`
  text-align: center;
  color: #f7996e;
  margin: 10px 0;
  background: #000;
  padding: 20px 10px;
  border-radius: 5px;
  position: absolute;
  bottom: 45%;
  transform: translateY(50%);
  z-index: 999;
`;

export const RestartBtn = styled.button`
  background-color: #4a5759;
  border: 0;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;
