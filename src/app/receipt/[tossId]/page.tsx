import { Metadata } from "next";
import { getDecodedStringifiedJSON } from "@/common/utils";
import { receiptValidationSchema } from "@/create-receipt";
import { ViewReceiptPageContent } from "./content";

type ViewReceiptPageProps = {
  params: { tossId: string };
  searchParams: { data?: string };
};

export async function generateMetadata({
  params: { tossId },
  searchParams: { data },
}: ViewReceiptPageProps): Promise<Metadata> {
  const receiptData = getDecodedStringifiedJSON(data) ?? {};

  const parsedData = receiptValidationSchema.safeParse({
    tossId,
    ...receiptData,
  });

  const metadata: Metadata = {
    description: "가장 재밌게 친구비를 받는 방법",
  };

  if (parsedData.success) {
    const receiverName = parsedData.data.receiverName;
    const totalPrice = parsedData.data.priceRows
      .map(({ count, price }) => count * price)
      .reduce((prev, next) => prev + next)
      .toLocaleString("ko-KR");
    return {
      ...metadata,
      title: `CHINGOO.BE - ${receiverName}님에게 친구비 ${totalPrice}원 보내기`,
    };
  } else {
    return {
      ...metadata,
      title: "CHINGOO.BE - 가장 재밌게 친구비를 받는 방법",
    };
  }
}

export default function ViewReceiptPage({
  params: { tossId },
  searchParams: { data },
}: ViewReceiptPageProps) {
  const receiptData = getDecodedStringifiedJSON(data) ?? {};
  return <ViewReceiptPageContent tossId={tossId} data={receiptData} />;
}
