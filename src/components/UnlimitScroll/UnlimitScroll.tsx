import React, { useEffect, useRef, useState } from 'react';

import * as S from './style';

function UnlimitScroll() {
  const [compCount, setCompCount] = useState<number>(10);
  const [squareArr, setSquareArr] = useState<number[]>(Array.from(Array(compCount).keys()));
  const observerRef = useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(squareArr);
    observerRef.current = new IntersectionObserver(intersectionObserver, {
      threshold: 0,
    });
    targetRef.current && observerRef.current.observe(targetRef.current);
  }, [squareArr]);

  const getMoreSquare = () => {
    setCompCount(compCount + 1);
    setSquareArr([...squareArr, compCount]);
  };

  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        getMoreSquare();
      }
    });
  };

  return (
    <S.Wrapper>
      {squareArr.map((num, index) => {
        if (index === squareArr.length - 1) {
          return (
            <S.Box key={index} ref={targetRef}>
              SHOW
            </S.Box>
          );
        }
        return <S.Box key={index}>{index}</S.Box>;
      })}
    </S.Wrapper>
  );
}

export default UnlimitScroll;
