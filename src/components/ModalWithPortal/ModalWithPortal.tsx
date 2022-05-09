import React, { useState } from 'react';

import * as S from './style';
import ModalPortal from './Portal';
import Modal from './Modal';

function ModalWithPortal() {
  const [modalIsShow, setModalIsShow] = useState<boolean>(false);

  const modalControl = () => {
    setModalIsShow(!modalIsShow);
  };

  return (
    <S.PortalWrapper>
      <ModalPortal isOpen={modalIsShow}>
        <Modal onClose={modalControl} />
      </ModalPortal>
      <S.ModalButton onClick={modalControl}>Modal On</S.ModalButton>
    </S.PortalWrapper>
  );
}

export default ModalWithPortal;
