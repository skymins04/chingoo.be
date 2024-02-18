"use client";

import { getMetaData } from "@/common/assets/metadata";

export const metadata = getMetaData(
  "CHINGOO.BE",
  "가장 재밌게 친구비를 받는 방법",
);

export default function ViewReceiptErrorPage() {
  return (
    <main className="flex h-[100vh] w-full flex-col items-center justify-center bg-gray-900">
      영수증을 찾을 수 없습니다 😭
    </main>
  );
}
