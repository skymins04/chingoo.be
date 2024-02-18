"use client";

import {
  ForwardRefExoticComponent,
  ForwardedRef,
  RefAttributes,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { ReceiptVariantBaseProps, ReceiptVariantNormal } from "./variants";

type ReceiptVariant = "normal";

export type ReceiptProps = {
  variant?: ReceiptVariant;
} & Omit<ReceiptVariantBaseProps, "dateTime" | "id">;

const receiptVariants: Record<
  ReceiptVariant,
  ForwardRefExoticComponent<
    ReceiptVariantBaseProps & RefAttributes<HTMLDivElement>
  >
> = {
  normal: ReceiptVariantNormal,
};

const _Receipt = (
  { variant = "normal", ...props }: ReceiptProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const [data, setData] = useState<{ id?: number; dateTime?: string }>({});

  const Variant = receiptVariants[variant];

  useEffect(function initReceipt() {
    setData({
      id: Math.floor(Math.random() * (100000000 - 1) + 1),
      dateTime: `${new Date().toLocaleDateString("ko-KR")} ${new Date().toLocaleTimeString("ko-KR")}`,
    });
  }, []);

  return <Variant {...props} {...data} ref={ref} />;
};

export const Receipt = forwardRef<HTMLDivElement, ReceiptProps>(_Receipt);
