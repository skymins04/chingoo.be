"use client";

import { ForwardedRef, forwardRef, useId } from "react";
import { FormItem, FormItemProps } from "@/common/components";
import { TextInput, TextInputProps } from ".";

export type FormTextInputProps = { inputClassName?: string } & Omit<
  FormItemProps,
  "children"
> &
  Omit<TextInputProps, "className">;

export const _FormTextInput = (
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
  }: FormTextInputProps,
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

  const textInputProps: TextInputProps = {
    className: inputClassName,
    status,
    ...props,
  };

  return (
    <FormItem {...formItemProps} labelHtmlFor={id}>
      <TextInput {...textInputProps} ref={ref} id={id} />
    </FormItem>
  );
};

export const FormTextInput = forwardRef<HTMLInputElement, FormTextInputProps>(
  _FormTextInput,
);
