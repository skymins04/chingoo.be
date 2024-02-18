"use client";

import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import clsx from "clsx/lite";
import { BaseInput, BaseInputProps } from "../base-input";

export type NumberInputType = "u-int";

export type NumberInputProps = {
  type?: NumberInputType;
  onChange?: (...event: any[]) => void;
} & Omit<BaseInputProps, "type" | "onChange">;

const _NumberInput = (
  { type = "u-int", className, onChange, ...props }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const handleChangeUInt = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    const unsingedFilteredValue = value < 0 ? 0 : value;
    const nanFilteredValue = isNaN(unsingedFilteredValue)
      ? 0
      : unsingedFilteredValue;
    if (onChange) {
      onChange({
        ...event,
        target: { ...event.target, value: nanFilteredValue },
      });
    }
  };

  const handleChange: Record<
    NumberInputType,
    (event: ChangeEvent<HTMLInputElement>) => void
  > = {
    "u-int": handleChangeUInt,
  };

  return (
    <BaseInput
      {...props}
      ref={ref}
      onChange={handleChange[type]}
      className={clsx(
        "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
        className,
      )}
      type="number"
    />
  );
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  _NumberInput,
);
