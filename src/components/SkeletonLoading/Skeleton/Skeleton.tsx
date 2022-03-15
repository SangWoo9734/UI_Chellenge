import { ReactNode } from 'react';

import Item from '../Item';

import * as S from './style';

interface Skeleton {
  children: ReactNode;
}

const Skeleton = ({ children }: Skeleton) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
Skeleton.Item = Item;

export default Skeleton;
