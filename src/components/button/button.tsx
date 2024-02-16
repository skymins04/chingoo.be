import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonSize = "lg" | "md" | "sm" | "xs";
export type ButtonColor = "primary" | "secondary";
export type ButtonVariant = "rounded";

export type ButtonProps = {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const buttonCommonStyle =
  "duration-200 [&:not(:disabled)]:hover:shadow-md [&:not(:disabled)]:hover:scale-[1.01] disabled:cursor-not-allowed";

const buttonSizeStyleMap: Record<ButtonSize, string> = {
  lg: "py-4 px-12 text-lg font-bold",
  md: "py-2 px-6 text-lg font-bold",
  sm: "py-1 px-3 text-sm",
  xs: "py-[2px] px-[6px] text-xs",
};

const buttonColorStyleMap: Record<ButtonColor, string> = {
  primary: "bg-blue-500 text-white disabled:bg-blue-300",
  secondary: "bg-gray-600 text-white disabled:bg-gray-300",
};

const buttonVariantStyleMap: Record<
  ButtonVariant,
  Record<ButtonSize, string>
> = {
  rounded: {
    lg: "rounded-2xl",
    md: "rounded-xl",
    sm: "rounded-lg",
    xs: "rounded-md",
  },
};

export const Button = ({
  className,
  size = "md",
  color = "primary",
  variant = "rounded",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonCommonStyle,
        buttonSizeStyleMap[size],
        buttonColorStyleMap[color],
        buttonVariantStyleMap[variant][size],
        className,
      )}
      {...props}
    />
  );
};
