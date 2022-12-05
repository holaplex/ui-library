import clsx from "clsx";
import { useMemo } from "react";
import Spinner from "./Spinner";

export enum ButtonBackground {
  White = "bg-white",
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
        return "10px";
      case ButtonSize.Small:
        return "15px";
      case ButtonSize.Large:
        return "20px";
    }
  }, [size]);

  const spinnerColor = useMemo(() => {
    switch (color) {
      case ButtonColor.Slate:
        return "#17161C";
      case ButtonColor.Gray:
        return "#8B8B8E";
      case ButtonColor.White:
        return "#fff";
    }
  }, [color]);
  return (
    <button
      className={clsx(
        clsx,
        "group flex grow-0 items-center justify-center rounded-full text-center font-bold",
        className,
        color,
        background,
        {
          "border-2 border-gray-300 bg-none hover:border-white active:text-white disabled:border-gray-300":
            border === ButtonBorder.Gray,
          "border-2 border-white bg-none hover:border-gray-300 active:text-white disabled:border-gray-300":
            border === ButtonBorder.White,
          "w-full": block,
          "py-1 px-4 text-sm":
            size === ButtonSize.Tiny || size === ButtonSize.Small,
          "py-3 px-6": size === ButtonSize.Large,
          "disabled:opacity-50": disabled,
          "px-0 py-0": circle,
        }
      )}
      disabled={disabled}
      type={htmlType}
      onClick={onClick}
    >
      <div
        className={clsx(
          "flex h-full w-full grow-0 items-center justify-center gap-1 rounded-full text-center",
          {
            "py-1 px-4 text-sm": size === ButtonSize.Tiny,
            "py-2 px-5 text-base": size === ButtonSize.Small,
            "py-2 px-6 text-lg": size === ButtonSize.Large,
          }
        )}
      >
        {loading && (
          <Spinner
            height={spinnerSize}
            width={spinnerSize}
            color={spinnerColor}
            className="inline aspect-square mr-2"
          />
        )}
        {icon && icon}
        {children && <span>{children}</span>}
      </div>
    </button>
  );
};

export default Button;
