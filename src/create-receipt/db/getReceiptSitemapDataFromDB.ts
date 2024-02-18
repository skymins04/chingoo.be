import "server-only";
import { prisma } from "@/common/db";

export const getReceiptSitemapDataFromDB = async () => {
  const rows = await prisma.receipt.findMany({
    select: { id: true, updated_at: true },
  });
  return rows;
};
