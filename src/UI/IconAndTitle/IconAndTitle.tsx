import { useIconAndTitleStyle } from "./style";
import { IIconAndTitleProps } from "./types";

const IconAndTitle = ({ title, children }: IIconAndTitleProps) => {
  const { IconSC, TitleSC, IconAndTitleSC } = useIconAndTitleStyle();

  return (
    <IconAndTitleSC>
      <IconSC>{children}</IconSC>
      <TitleSC>{title}</TitleSC>
    </IconAndTitleSC>
  );
};

export default IconAndTitle;
