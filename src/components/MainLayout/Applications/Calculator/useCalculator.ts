import React, { useEffect, useState } from "react";

export const useCalculator = () => {
  let a = ""; // first number
  let b = ""; // secont number
  let sign = ""; // знак опурации
  let finish = false;

  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const action = ["-", "+", "x", "/"];

  let out: HTMLElement | null;
  useEffect(() => {
    out = document.getElementById("displayCalc");
  }, []);

  const clearAll = () => {
    a = "";
    b = "";
    sign = "";
    finish = false;
    if (out) {
      out.innerText = "0";
    }
  };
  const handleButtonClick = (e: any) => {
    // плучаем текст нажатой кнопки
    const key = e.target.innerText;

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
      if (b === "" && sign === "") {
        a += key;
        if (out) {
          out.innerText = a;
        }
      } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        if (out) {
          out.innerText = b;
        }
      } else {
        b += key;
        if (out) {
          out.innerText = b;
        }
      }
      return;
    }
    // если нажат знак
    if (action.includes(key)) {
      sign = key;
      if (out) {
        out.innerText = sign;
      }
      return;
    }
    // =
    if (key === "=") {
      if (b === "") b = a;
      switch (sign) {
        case "+":
          a = String(+a + +b);
          break;
        case "-":
          a = String(+a - +b);
          break;
        case "x":
          a = String(+a * +b);
          break;
        case "/":
          if (b === "0") {
            clearAll();
            return;
          }
          a = String(+a / +b);
          break;
      }
      finish = true;
      if (out) {
        out.innerText = a;
      }
    }
  };
  return {
    clearAll,
    handleButtonClick,
  };
};
