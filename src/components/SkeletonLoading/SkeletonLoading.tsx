import React from 'react';

import * as S from './style';
import Skeleton from './Skeleton';

const Unit = () => {
  return (
    <Skeleton>
      <Skeleton.Item width={150} height={150}></Skeleton.Item>
      <Skeleton.Item width={100} height={30}></Skeleton.Item>
      <Skeleton.Item width={120} height={30}></Skeleton.Item>
      <Skeleton.Item width={50} height={30}></Skeleton.Item>
    </Skeleton>
  );
};

const SkeletonLoading = () => {
  return (
    <S.Wrapper>
      {new Array(6).fill(0).map((num, index) => {
        return <Unit key={index} />;
      })}
    </S.Wrapper>
  );
};

export default SkeletonLoading;
