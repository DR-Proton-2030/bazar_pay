import { ReactNode } from "react";

export interface ISmallCardProps {
  title: string;
  subTitle?: string;
  icon?: ReactNode | ReactNode[];
  handlePress?: () => void;
}
