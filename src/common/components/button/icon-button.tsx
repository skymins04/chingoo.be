import { TablerIconsProps } from "@tabler/icons-react";
import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type IconButtonProps = {
  icon: (props: TablerIconsProps) => JSX.Element;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  const Icon = icon;
  return (
    <button
      {...props}
      className={clsx(
        "group duration-200 hover:scale-[1.04] active:scale-100",
        className,
      )}
    >
      <Icon className="h-full w-full" />
    </button>
  );
};
