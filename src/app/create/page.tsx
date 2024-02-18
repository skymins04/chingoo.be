import { Metadata } from "next";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import { FloatingBottomArea, Header, IconButton } from "@/common/components";
import { CreateReceipt } from "@/create-receipt";

export const metadata: Metadata = {
  title: "CHINGOO.BE - 친구비 링크 만들기",
  description: "가장 재밌게 친구비를 받는 방법",
};

export default function CreateReceiptPage() {
  const receiptId = uuidv4();

  return (
    <CreateReceipt.Provider>
      <main className="flex flex-col items-stretch justify-start gap-6 bg-gray-900 px-6 pb-6 pt-8">
        <Header
          title="친구비 링크 만들기"
          leftArea={
            <Link href="/">
              <IconButton icon={IconArrowLeft} className="h-full w-full" />
            </Link>
          }
        />

        <CreateReceipt.Preview />
        <CreateReceipt.Input />
      </main>
      <FloatingBottomArea>
        <CreateReceipt.CopyLinkButton receiptId={receiptId} />
      </FloatingBottomArea>
    </CreateReceipt.Provider>
  );
}
