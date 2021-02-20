import styled from 'styled-components/macro';

export const BoardContainer = styled.div`
  width: 450px;
  height: 450px;

  @media (max-width: 520px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 380px) {
    width: 300px;
    height: 300px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const TopLeft = styled.div`
  width: 150px;
  height: 150px;
  border-bottom: 1px solid #4c4c9d;
  border-right: 1px solid #4c4c9d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
  }

  @media (max-width: 520px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 380px) {
    width: 100px;
    height: 100px;
  }
`;

export const TopCenter = styled(TopLeft)`
  border-left: 1px solid #4c4c9d;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;
  }
`;

export const TopRight = styled(TopCenter)`
  border-right: 0;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;
  }
`;

export const CenterLeft = styled(TopLeft)`
  border-top: 1px solid #4c4c9d;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;
  }
`;

export const CenterCenter = styled(TopCenter)`
  border-top: 1px solid #4c4c9d;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;
  }
`;

export const CenterRight = styled(TopRight)`
  border-top: 1px solid #4c4c9d;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;
  }
`;

export const BottomLeft = styled(CenterLeft)`
  border-bottom: 0;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;
  }
`;

export const BottomCenter = styled(CenterCenter)`
  border-bottom: 0;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;ba2d0b
  }
`;

export const BottomRight = styled(CenterRight)`
  border-bottom: 0;

  &:hover {
    background-color: ${({ bg }) => (bg === null ? '#415d43' : '#ba2d0b')};
    // background-color: #ba2d0b;
  }
`;

export const Inner = styled.div``;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #712f79;
  border-radius: 50%;
`;

export const Cross = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #f7996e;
`;
