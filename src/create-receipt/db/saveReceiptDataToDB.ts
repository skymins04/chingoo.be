import "server-only";
import { PrismaClient } from "@prisma/client";
import { CreateReciptForm } from "../form";

export const saveReceiptDataToDB = async (
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
  const prisma = new PrismaClient();
  const existRow = await prisma.receipt.findUnique({ where: { id } });

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

  if (existRow) {
    await prisma.receipt.update({ where: { id }, data });
  } else {
    await prisma.receipt.create({
      data: {
        id,
        ...data,
      },
    });
  }
};
