import "server-only";
import { CreateReciptForm } from "../form";
import { prisma } from "@/common/db";

export const getReceiptDataFromDB = async (
  id: string,
): Promise<{ id: string; receiptData: CreateReciptForm }> => {
  const {
    toss_id,
    title,
    receiver_name,
    remitter_name,
    remitter_title,
    method,
    footer_message,
    is_show_date,
    is_show_id,
    price_rows,
  } = await prisma.receipt.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return {
    id,
    receiptData: {
      tossId: toss_id,
      title,
      receiverName: receiver_name || undefined,
      remitterName: remitter_name || undefined,
      remitterTitle: remitter_title || undefined,
      method: method || undefined,
      footerMessage: footer_message || undefined,
      isShowDate: !!is_show_date,
      isShowId: !!is_show_id,
      priceRows: price_rows as any,
    },
  };
};
