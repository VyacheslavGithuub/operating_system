export interface ICardsUIProps {
  variant: string | "small" | "medium" | "large";
  title: string;
  children?: React.ReactNode;
  url: string;
}
