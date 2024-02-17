"use client";

import { z } from "zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReceiptProps } from "@/common/components";

export type CreateReciptForm = { tossId: string } & Omit<
  ReceiptProps,
  "className" | "variant"
>;

const formSchema: z.ZodObject<Record<keyof CreateReciptForm, z.ZodTypeAny>> =
  z.object({
    tossId: z.string({ required_error: "토스아이디를 입력해주세요." }),
    title: z
      .string({
        invalid_type_error: "올바른 영수증 제목을 입력해주세요.",
        required_error: "영수증 제목을 입력해주세요.",
      })
      .min(1, "최소 한글자 이상 작성해주세요."),
    receiverName: z.string().optional(),
    remitterName: z.string().optional(),
    remitterTitle: z.string().optional(),
    method: z.string().optional(),
    footerMessage: z.string().optional(),
    isShowDate: z.boolean().optional(),
    isShowId: z.boolean().optional(),
    priceRows: z
      .object({
        name: z.string(),
        count: z.number(),
        price: z.number(),
      })
      .array(),
  });

export const useCreateReceiptForm = () =>
  useForm<CreateReciptForm>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "친구비 영수증",
      receiverName: "홍길동",
      remitterName: "홍길동",
      remitterTitle: "납부자",
      method: "일시납부",
      footerMessage: "친구비 환불 절대 불가",
      isShowDate: true,
      isShowId: true,
      priceRows: [
        { name: "친구1년재계약", count: 1, price: 10000 },
        { name: "친구호출권", count: 3, price: 1000 },
      ],
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
