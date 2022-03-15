import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  margin: auto;
  border: 1px solid rgb(216, 219, 222);
  border-radius: 15px;

  & > * {
    margin: 5px;
  }

  @keyframes skeleton--loading {
    0% {
      background: rgb(216, 219, 222);
    }
    50% {
      background: rgb(216, 219, 222, 0.4);
    }
    100% {
      background: rgb(216, 219, 222);
    }
  }
`;
