import React, { useState, useEffect } from "react";

export const usePointerClockMinutes = () => {
  // храним актуальное время
  const [getMinutes, setMinutes] = useState<number>(0);

  let data = new Date();
  let getSeconds = data.getSeconds();
  let minuts = data.getMinutes();
  // Выщитываем оставшиеся секунды до 0 при первой отрисовке
  let res = (61 - getSeconds) * 1000;

  // Сетаем минуты
  const FSetMinutes = () => {
    setMinutes(minuts++);
  };
  //На первом кругу сетаем минуты, отсчитав секунды
  setTimeout(FSetMinutes, res);
  // Зацикливаем
  if (getMinutes === 0) {
    setInterval(FSetMinutes, 60000);
  }

  useEffect(() => {
    // При монтировании компонента, заносим минуты в стейт
    FSetMinutes();
  }, [getMinutes]);

  return {
    getMinutes,
  };
};
