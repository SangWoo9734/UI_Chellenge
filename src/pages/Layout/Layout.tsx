import React, { useState } from 'react';

import * as S from './style';

import Header from '../../components/Header';
import UnlimitScroll from '../../components/UnlimitScroll';
import SkeletonLoading from '../../components/SkeletonLoading';
import Calendar from '../../components/Calendar';
import SelectBox from '../../components/SelectBox';
import ModalWithPortal from '../../components/ModalWithPortal';

function Layout() {
  const [nowShow, setNowShow] = useState<number>(0);

  const showedComponent = () => {
    switch (nowShow) {
      case 0:
        return <UnlimitScroll />;
      case 1:
        return <SkeletonLoading />;
      case 2:
        return <Calendar />;
      case 3:
        return <SelectBox />;
      case 4:
        return <ModalWithPortal />;
      default:
        return <div></div>;
    }
  };

  return (
    <S.Wrapper>
      <Header setNowShow={setNowShow} />
      <S.Content>{showedComponent()}</S.Content>
    </S.Wrapper>
  );
}

export default Layout;
