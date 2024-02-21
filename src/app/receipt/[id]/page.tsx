import { Metadata } from "next";
import { getMetaData } from "@/common/assets/metadata";
import { getReceiptDataFromDB } from "@/create-receipt";
import { ViewReceiptPageContent } from "./content";
import { HOST } from "@/common/env";

type ViewReceiptPageProps = {
  params: { id: string };
  searchParams: { data?: string };
};

export async function generateMetadata({
  params: { id },
}: ViewReceiptPageProps): Promise<Metadata> {
  const { receiptData } = await getReceiptDataFromDB(id);

  const receiverName = receiptData.receiverName;
  const totalPrice = receiptData.priceRows
    .map(({ count, price }) => count * price)
    .reduce((prev, next) => prev + next)
    .toLocaleString("ko-KR");
  const title = `친구비 CHINGOO.BE - ${receiverName}님에게 친구비 ${totalPrice}원 보내기`;
  const description = "가장 재밌게 친구비를 받는 방법";
  const url = `${HOST}/receipt/${id}`;
  return getMetaData(title, description, url);
}

export default async function ViewReceiptPage({
  params: { id },
}: ViewReceiptPageProps) {
  const { receiptData } = await getReceiptDataFromDB(id);
  return <ViewReceiptPageContent receiptData={receiptData} />;
}
