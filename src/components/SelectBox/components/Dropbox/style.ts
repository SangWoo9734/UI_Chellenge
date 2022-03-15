import styled from 'styled-components';

export const SelectOptions = styled.div<{ showSelectBox: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 40px;
  border: 3px solid lightgray;
  border-radius: 5px;
  text-align: left;
  transition: all 0.3s linear;
  height: 0px;
  animation: ${({ showSelectBox }) => (showSelectBox ? 'dropDown' : 'dropUp')} 0.2s linear;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes dropDown {
    0% {
      height: 0;
    }
    100% {
      height: 400px;
    }
  }
`;

export const Type = styled.div`
  position: relative;
  width: 100%;
  & > * {
    width: 200px;
    font-size: 15px;
    padding: 10px;
    background: white;
  }

  & .rotate {
    transition: all 0.3s linear;
  }

  &:hover {
    & .rotate {
      transform: rotate(180deg);
    }
    ${SelectOptions} {
      transition: all 0.3s linear;
      height: 400px;
    }
  }
`;

export const SelectWindow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  border: 3px solid lightgray;
  border-radius: 5px;
  z-index: 10;
`;

export const SelectUnit = styled.div`
  height: 20px;
  padding: 10px 0;

  &:hover {
    background: lightgray;
  }
`;
