"use client";

import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { ReceiptProps } from "@/common/components";
import { receiptValidationSchema } from "./form-schema";
import { superstructResolver } from "@hookform/resolvers/superstruct";

export type CreateReciptForm = { tossId: string } & Omit<
  ReceiptProps,
  "className" | "variant"
>;

export const useCreateReceiptForm = () =>
  useForm<CreateReciptForm>({
    mode: "all",
    resolver: superstructResolver(receiptValidationSchema),
    defaultValues: {
      title: "친구비 영수증",
      receiverName: "",
      remitterName: "김친구",
      remitterTitle: "납부자",
      method: "일시납부",
      footerMessage: "친구비 환불 절대 불가",
      isShowDate: true,
      isShowId: true,
      priceRows: [{ name: "친구1년재계약", count: 1, price: 10000 }],
    },
  });

export const useCreateReceiptFormContext = () =>
  useFormContext<CreateReciptForm>();

export const CreateReceiptFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const formMethod = useCreateReceiptForm();

  return <FormProvider {...formMethod}>{children}</FormProvider>;
};
