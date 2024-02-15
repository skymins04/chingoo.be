import { ReceiptVariantBaseProps, ReceiptVariantNormal } from "./variants";

type ReceiptVariant = "normal";

export type ReceiptProps = {
  variant?: ReceiptVariant;
} & ReceiptVariantBaseProps;

const receiptVariants: Record<
  ReceiptVariant,
  (props: ReceiptVariantBaseProps) => ReactNode
> = {
  normal: ReceiptVariantNormal,
};

export const Receipt = ({ variant = "normal", ...props }: ReceiptProps) => {
  const Variant = receiptVariants[variant];
  return <Variant {...props} />;
};
