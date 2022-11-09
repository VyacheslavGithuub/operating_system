import React from "react";
import { useCalculatorStyle } from "./style";
import calculatorObject from "./calculatorObject.json";
import { useCalculator } from "./useCalculator";

const Calculator = () => {
  const { DisplaySC, WorkspaceSC, ButtonCalcSC, CalculatorSC } =
    useCalculatorStyle();
  const { clearAll, handleButtonClick } = useCalculator();

  return (
    <CalculatorSC>
      <DisplaySC id="displayCalc" />
      <WorkspaceSC>
        <ButtonCalcSC onClick={() => clearAll()}>ac</ButtonCalcSC>
        {calculatorObject.map((i, index) => (
          <ButtonCalcSC key={index} onClick={(e: any) => handleButtonClick(e)}>
            {i.value}
          </ButtonCalcSC>
        ))}
      </WorkspaceSC>
    </CalculatorSC>
  );
};

export default React.memo(Calculator);
