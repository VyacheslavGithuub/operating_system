import React from "react";
interface IBackgroundThemeProps {
  BackgroundThemeObj: any;
  HLocalStorage: (arg0: number) => void;
}
const BackgroundTheme = ({
  BackgroundThemeObj,
  HLocalStorage,
}: IBackgroundThemeProps) => {
  return (
    <div>
      {BackgroundThemeObj.map((item: any) => (
        <button key={item.id} onClick={() => HLocalStorage(item.id)}>
          {item.id}
        </button>
      ))}
    </div>
  );
};

export default React.memo(BackgroundTheme);
