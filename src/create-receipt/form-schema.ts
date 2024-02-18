import { z } from "zod";

export const receiptValidationSchema = z.object({
  tossId: z
    .string({ required_error: "토스아이디를 입력해주세요." })
    .min(1, "토스아이디를 입력해주세요."),
  title: z
    .string({
      invalid_type_error: "올바른 영수증 제목을 입력해주세요.",
      required_error: "영수증 제목을 입력해주세요.",
    })
    .min(1, "영수증 제목을 입력해주세요."),
  receiverName: z.string().min(1, "이름을 입력해주세요."),
  remitterName: z.string().optional(),
  remitterTitle: z.string().optional(),
  method: z.string().optional(),
  footerMessage: z.string().optional(),
  isShowDate: z.boolean().optional(),
  isShowId: z.boolean().optional(),
  priceRows: z
    .object({
      name: z.string().min(1, { message: "품목명을 입력해주세요." }),
      count: z.number().min(0, { message: "0 이상으로 입력해주세요." }),
      price: z.number().min(0, { message: "0 이상으로 입력해주세요." }),
    })
    .array(),
});
