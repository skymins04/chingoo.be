"use client";

import { Receipt } from "@/common/components";
import { CreateReciptForm } from "./form";
import { useWatch } from "react-hook-form";

export type FormControlledReceiptProps = {
  className?: string;
};

export const FormControlledReceipt = ({
  className,
}: FormControlledReceiptProps) => {
  const receiptFormValues = useWatch<CreateReciptForm>() as CreateReciptForm;

  return <Receipt className={className} {...receiptFormValues} />;
};
