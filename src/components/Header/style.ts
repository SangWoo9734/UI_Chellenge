import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  background: black;
  padding: 0 50px;
  overflow-x: auto;
`;

export const Button = styled.button`
  width: fit-content;
  height: 40px;
  background: white;
  font-size: 16px;
  border-radius: 25px;
  padding: 0 15px;
  margin: 5px;
`;
