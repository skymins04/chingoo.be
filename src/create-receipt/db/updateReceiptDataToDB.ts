import "server-only";
import { prisma } from "@/common/db";
import { CreateReciptForm } from "../form";

export const updateReceiptDataToDB = async (
  id: string,
  {
    tossId,
    title,
    receiverName,
    remitterName,
    remitterTitle,
    method,
    footerMessage,
    isShowDate,
    isShowId,
    priceRows,
  }: CreateReciptForm,
) => {
  const data = {
    toss_id: tossId,
    title,
    receiver_name: receiverName,
    remitter_name: remitterName,
    remitter_title: remitterTitle,
    method,
    footer_message: footerMessage,
    is_show_date: isShowDate,
    is_show_id: isShowId,
    price_rows: priceRows,
  };

  await prisma.receipt.update({ where: { id }, data });
};
