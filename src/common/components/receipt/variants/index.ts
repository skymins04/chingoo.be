export * from "./receipt-variant-normal";

export type ReceiptVariantBaseProps = {
  className?: string;
  title: string;
  receiverName?: string;
  remitterName?: string;
  remitterTitle?: string;
  method?: string;
  footerMessage?: string;
  dateTime?: string;
  isShowDate?: boolean;
  id?: number;
  isShowId?: boolean;
  priceRows: { name: string; count: number; price: number }[];
};
