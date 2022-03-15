import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: lightgray;
`;

export const Content = styled.div`
  width: 50%;
  height: calc(100vh - 100px);
  margin: auto;
  padding-top: 100px;
  background: white;
  overflow: auto;
`;
