import * as s from "superstruct";
import { message } from "@/common/utils/superstruct";

export const receiptValidationSchema = s.object({
  tossId: message(
    s.size(s.string(), 1, Infinity),
    "토스아이디를 입력해주세요.",
  ),
  title: message(
    s.size(s.string(), 1, Infinity),
    "영수증 제목을 입력해주세요.",
  ),
  receiverName: message(
    s.size(s.string(), 1, Infinity),
    "이름을 입력해주세요.",
  ),
  remitterName: s.optional(s.string()),
  remitterTitle: s.optional(s.string()),
  method: s.optional(s.string()),
  footerMessage: s.optional(s.string()),
  isShowDate: s.optional(s.boolean()),
  isShowId: s.optional(s.boolean()),
  priceRows: s.array(
    s.object({
      name: message(s.size(s.string(), 1, Infinity), "품목명을 입력해주세요."),
      count: message(s.min(s.number(), 0), "0 이상으로 입력해주세요."),
      price: message(s.min(s.number(), 0), "0 이상으로 입력해주세요."),
    }),
  ),
});
