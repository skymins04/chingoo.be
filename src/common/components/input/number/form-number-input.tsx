"use client";

import { ForwardedRef, forwardRef, useId } from "react";
import { FormItem, FormItemProps } from "@/common/components";
import { NumberInput, NumberInputProps } from ".";

export type FormNumberInputProps = { inputClassName?: string } & Omit<
  FormItemProps,
  "children"
> &
  Omit<NumberInputProps, "className">;

export const _FormNumberInput = (
  {
    label,
    wrapperClassName,
    labelClassName,
    inputClassName,
    isRequired,
    labelRightArea,
    helpMessage,
    status,
    ...props
  }: FormNumberInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const id = useId();

  const formItemProps: FormItemProps = {
    label,
    wrapperClassName,
    labelClassName,
    isRequired,
    labelRightArea,
    helpMessage,
    status,
  };

  const numberInputProps: NumberInputProps = {
    className: inputClassName,
    status,
    ...props,
  };

  return (
    <FormItem {...formItemProps} labelHtmlFor={id}>
      <NumberInput {...numberInputProps} ref={ref} id={id} />
    </FormItem>
  );
};

export const FormNumberInput = forwardRef<
  HTMLInputElement,
  FormNumberInputProps
>(_FormNumberInput);
