import { useMemo } from "react";

export enum ButtonBackground {
  Black = "bg-black",
  Slate = "bg-gray-800",
  Cell = "bg-gray-900",
}

export enum ButtonColor {
  White = "text-white",
  Gray = "text-gray-300 hover:text-white group-focus:text-white disabled:text-gray-300",
  Slate = "text-gray-800",
}

export enum ButtonBorder {
  Gray = "gray",
  White = "white",
  Black = "black",
}

export enum ButtonSize {
  Tiny = "tiny",
  Small = "small",
  Large = "large",
}

interface ButtonProps {
  background?: ButtonBackground;
  border?: ButtonBorder;
  color?: ButtonColor;
  size?: ButtonSize;
  loading?: boolean;
  block?: boolean;
  icon?: React.ReactElement;
  onClick?: () => any;
  disabled?: boolean;
  circle?: boolean;
  htmlType?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: any;
}

const Button = ({
  background = ButtonBackground.Black,
  border,
  color = ButtonColor.White,
  size = ButtonSize.Large,
  loading = false,
  block = false,
  icon,
  onClick,
  disabled = false,
  circle = false,
  htmlType = "button",
  className,
  children,
}: ButtonProps): JSX.Element => {
  const spinnerSize = useMemo(() => {
    switch (size) {
      case ButtonSize.Tiny:
        return "5px";
      case ButtonSize.Small:
        return "10px";
      case ButtonSize.Large:
        return "20px";
    }
  }, [size]);
  return <></>;
};
