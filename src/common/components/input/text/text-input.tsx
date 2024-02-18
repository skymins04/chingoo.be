import { ForwardedRef, forwardRef } from "react";
import { BaseInput, BaseInputProps } from "../base-input";

export type TextInputProps = Omit<BaseInputProps, "type">;

const _TextInput = (
  props: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return <BaseInput {...props} ref={ref} type="text" />;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  _TextInput,
);
