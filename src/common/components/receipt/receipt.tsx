"use client";

import { useEffect, useState } from "react";
import { ReceiptVariantBaseProps, ReceiptVariantNormal } from "./variants";

type ReceiptVariant = "normal";

export type ReceiptProps = {
  variant?: ReceiptVariant;
} & Omit<ReceiptVariantBaseProps, "dateTime" | "id">;

const receiptVariants: Record<
  ReceiptVariant,
  (props: ReceiptVariantBaseProps) => ReactNode
> = {
  normal: ReceiptVariantNormal,
};

export const Receipt = ({ variant = "normal", ...props }: ReceiptProps) => {
  const [data, setData] = useState<{ id?: number; dateTime?: string }>({});

  const Variant = receiptVariants[variant];

  useEffect(() => {
    setData({
      id: Math.floor(Math.random() * (100000000 - 1) + 1),
      dateTime: `${new Date().toLocaleDateString("ko-KR")} ${new Date().toLocaleTimeString("ko-KR")}`,
    });
  }, []);

  return <Variant {...props} {...data} />;
};
