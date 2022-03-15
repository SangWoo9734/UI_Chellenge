import React from 'react';

import * as S from './style';

interface Props {
  setNowShow: (arg0: number) => void;
}

function Header({ setNowShow }: Props) {
  return (
    <S.Wrapper>
      <S.Button onClick={() => setNowShow(0)}>무한 스크롤</S.Button>
      <S.Button onClick={() => setNowShow(1)}>Skeleton UI</S.Button>
      <S.Button onClick={() => setNowShow(2)}>Calendar</S.Button>
      <S.Button onClick={() => setNowShow(3)}>Select Box</S.Button>
    </S.Wrapper>
  );
}

export default Header;
