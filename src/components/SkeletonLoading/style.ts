import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32%, auto));
  grid-gap: 5px;
`;

export const SkeletonBox = styled.div<{ width: number; height: number }>``;
