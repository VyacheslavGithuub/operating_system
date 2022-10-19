import { useSkeletonStyle } from "./style";
import { ISkeletonUIProps } from "./types";

const SkeletonUI = ({ width, height, radius }: ISkeletonUIProps) => {
  const { SkeletonSC } = useSkeletonStyle();
  return <SkeletonSC width={width} height={height} radius={radius} />;
};

export default SkeletonUI;
