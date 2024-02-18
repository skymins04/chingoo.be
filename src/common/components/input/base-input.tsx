import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import clsx from "clsx/lite";

export type InputStatus = "default" | "error";

export type BaseInputProps = { status?: InputStatus } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const _BaseInput = (
  { status, className, ...props }: BaseInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <input
      {...props}
      ref={ref}
      className={clsx(
        "w-full rounded-xl px-4 py-2 outline-none duration-200",
        "bg-gray-800 text-gray-400 placeholder:text-gray-600",
        status === "error" && "ring-2 ring-red-500",
        className,
      )}
    />
  );
};

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  _BaseInput,
);
