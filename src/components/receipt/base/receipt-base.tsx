import ReceiptBaseTail from "./receipt-tail.svg";
import clsx from "clsx";

export type ReceiptBaseProps = {
  className?: string;
  children: ReactNode;
};

export const ReceiptBase = ({ className, children }: ReceiptBaseProps) => {
  return (
    <div className={clsx("relative drop-shadow-md", className)}>
      <div className="w-full bg-white p-4">{children}</div>
      <ReceiptBaseTail className="w-full -translate-y-1 fill-white" />
    </div>
  );
};
