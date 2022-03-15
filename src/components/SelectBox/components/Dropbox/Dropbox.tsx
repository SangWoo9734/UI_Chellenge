import React, { useState } from 'react';

import * as S from './style';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

interface Props {
  hover?: boolean;
}

function Dropbox({ hover }: Props) {
  const longtermLevel = [
    '선택',
    '햄버거',
    '피자',
    '치킨',
    '타코야끼',
    '삼겹살',
    '갈비',
    '볶음밥',
    '짜장면',
    '짬뽕',
    '김치찌개',
  ];
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [showSelectBox, setShowSelectBox] = useState<boolean>(false);
  return (
    <S.Type>
      <S.SelectWindow
        onClick={() => {
          setShowSelectBox(!showSelectBox);
        }}
      >
        <div>
          {longtermLevel[selectIndex]}
          {hover}
        </div>
        {hover ? (
          <AiOutlineDown className="rotate" />
        ) : showSelectBox ? (
          <AiOutlineUp />
        ) : (
          <AiOutlineDown />
        )}
      </S.SelectWindow>
      {hover ? (
        <S.SelectOptions showSelectBox={showSelectBox}>
          {longtermLevel.map((level, index) => {
            return (
              <S.SelectUnit
                key={index}
                onClick={() => {
                  setSelectIndex(index + 1);
                }}
              >
                {level}
              </S.SelectUnit>
            );
          })}
        </S.SelectOptions>
      ) : (
        showSelectBox && (
          <S.SelectOptions showSelectBox={showSelectBox}>
            {longtermLevel.map((level, index) => {
              return (
                <S.SelectUnit
                  key={index}
                  onClick={() => {
                    setSelectIndex(index + 1);
                  }}
                >
                  {level}
                </S.SelectUnit>
              );
            })}
          </S.SelectOptions>
        )
      )}
    </S.Type>
  );
}

export default Dropbox;
