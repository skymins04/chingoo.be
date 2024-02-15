export * from "./receipt-variant-normal";

export type ReceiptVariantBaseProps = {
  className?: string;
  title: string;
  receiverName?: string;
  remitterName?: string;
  remitterTitle?: string;
  method?: string;
  footerMessage?: string;
  isShowDate?: boolean;
  isShowId?: boolean;
  priceRows: { name: string; count: number; price: number }[];
};
