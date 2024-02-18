import clsx from "clsx/lite";
import { InputStatus } from "../input/base-input";

export type FormItemProps = {
  children?: ReactNode;
  label?: ReactNode;
  labelHtmlFor?: string;
  labelRightArea?: ReactNode;
  helpMessage?: ReactNode;
  status?: InputStatus;
  isRequired?: boolean;
  wrapperClassName?: string;
  labelClassName?: string;
  helpMessageClassName?: string;
};

export const FormItem = ({
  children,
  label,
  labelHtmlFor,
  labelRightArea,
  helpMessage,
  status,
  isRequired,
  wrapperClassName,
  labelClassName,
  helpMessageClassName,
}: FormItemProps) => {
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
            <label className={labelClassName} htmlFor={labelHtmlFor}>
              {label}
              {isRequired && <span className="ml-1 text-red-500">*</span>}
            </label>
          )}
          {labelRightArea && <div className="ml-auto">{labelRightArea}</div>}
        </div>
      )}
      {children}
      {helpMessage && (
        <p
          className={clsx(
            "px-1 text-sm",
            status === "error" && "text-red-500",
            helpMessageClassName,
          )}
        >
          {helpMessage}
        </p>
      )}
    </div>
  );
};
