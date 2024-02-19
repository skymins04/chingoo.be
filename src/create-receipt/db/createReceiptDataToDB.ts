import "server-only";
import { prisma } from "@/common/db";
import { CreateReciptForm } from "../form";

export const createReceiptDataToDB = async ({
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
}: CreateReciptForm) => {
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

  const { id } = await prisma.receipt.create({
    data,
  });

  return id;
};
