import { CreateReceiptFormProvider, receiptValidationSchema } from "./form";
import { CreateReceiptPreview } from "./preview";
import { CreateReceiptInput } from "./input";
import { CreateReceiptCopyLinkButton } from "./copy-link-button";

export const CreateReceipt = {
  Provider: CreateReceiptFormProvider,
  Preview: CreateReceiptPreview,
  Input: CreateReceiptInput,
  CopyLinkButton: CreateReceiptCopyLinkButton,
};

export { receiptValidationSchema };
