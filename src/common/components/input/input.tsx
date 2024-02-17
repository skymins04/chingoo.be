import clsx from "clsx/lite";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = {
  label?: ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  isRequired?: boolean;
  labelRightArea?: ReactNode;
  helpMessage?: ReactNode;
  status?: "default" | "error";
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "className"
>;

export const Input = ({
  type,
  label,
  wrapperClassName,
  labelClassName,
  inputClassName,
  isRequired,
  labelRightArea,
  helpMessage,
  status,
  ...props
}: InputProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start justify-center gap-1",
        wrapperClassName,
      )}
    >
      {(label || labelRightArea) && (
        <div className="flex w-full items-center justify-between px-1">
          {label && (
            <label className={clsx("", labelClassName)}>
              {label}
              {isRequired && <span className="ml-1 text-red-500">*</span>}
            </label>
          )}
          {labelRightArea && <div className="ml-auto">{labelRightArea}</div>}
        </div>
      )}
      <input
        {...props}
        className={clsx(
          "w-full rounded-xl bg-gray-800 px-4 py-2 text-gray-400 duration-200 placeholder:text-gray-600",
          status === "error" && "ring-2 ring-red-500",
          inputClassName,
        )}
        type="text"
      />
      {helpMessage && (
        <p
          className={clsx("px-1 text-sm", status === "error" && "text-red-500")}
        >
          {helpMessage}
        </p>
      )}
    </div>
  );
};
