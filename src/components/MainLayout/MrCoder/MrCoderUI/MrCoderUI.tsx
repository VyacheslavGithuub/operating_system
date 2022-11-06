import React, { Children, useState } from "react";
import { useMrCoderUIStyle } from "./style";

const MrCoderUI = ({ children, title, type }: IMrCoderUIProps) => {
  const { NarrativeCloudSC, MrChildrenSC } = useMrCoderUIStyle();

  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClickChildren = () => {
    setIsActive(true);
    setTimeout(setIsActive, 1000, false);
  };

  return (
    <>
      <NarrativeCloudSC type={type}>{title}</NarrativeCloudSC>
      <MrChildrenSC onClick={handleClickChildren} isActive={isActive}>
        {children}
      </MrChildrenSC>
    </>
  );
};

export default MrCoderUI;
