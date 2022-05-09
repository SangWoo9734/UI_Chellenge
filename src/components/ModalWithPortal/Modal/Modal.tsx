import React from 'react';

import * as S from './style';

interface Props {
  onClose: () => void;
}

function Modal({ onClose }: Props) {
  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <p>Modal is Open!!!</p>
        <button onClick={() => onClose()}>OK</button>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
}

export default Modal;
