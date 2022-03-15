import styled from 'styled-components';

import { Props } from './index';

export const Content = styled.div<Props>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
  border-radius: 5px;
  animation: skeleton--loading 2s infinite linear;
`;
