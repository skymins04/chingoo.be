import { ForwardedRef, forwardRef } from "react";
import ReceiptBaseTail from "./receipt-tail.svg";
import clsx from "clsx/lite";

export type ReceiptBaseProps = {
  className?: string;
  children: ReactNode;
};

const _ReceiptBase = (
  { className, children }: ReceiptBaseProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div ref={ref} className={clsx("relative drop-shadow-md", className)}>
      <div className="w-full bg-white p-4">{children}</div>
      <ReceiptBaseTail className="w-full -translate-y-1 fill-white" />
    </div>
  );
};

export const ReceiptBase = forwardRef<HTMLDivElement, ReceiptBaseProps>(
  _ReceiptBase,
);
