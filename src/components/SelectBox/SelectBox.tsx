import React, { useState } from 'react';

import * as S from './style';
import Dropbox from './components/Dropbox';

function SelectBox() {
  return (
    <S.SelectWrapper>
      <S.DropClick>
        <div>Click</div>
        <Dropbox />
      </S.DropClick>
      <S.DropHover>
        <div>Hover</div>
        <Dropbox hover />
      </S.DropHover>
    </S.SelectWrapper>
  );
}

export default SelectBox;
