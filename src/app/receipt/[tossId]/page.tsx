"use client";

import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { toPng } from "html-to-image";
import { getDecodedStringifiedJSON } from "@/common/utils";
import {
  Button,
  FloatingBottomArea,
  FormTextInput,
  Header,
  Receipt,
} from "@/common/components";
import { receiptValidationSchema } from "@/create-receipt";

export default function ViewReceiptPage({
  params: { tossId },
  searchParams: { data },
}: {
  params: { tossId: string };
  searchParams: { data?: string };
}) {
  const { control, watch } = useForm<{ remitterName: string }>({
    mode: "all",
    defaultValues: {
      remitterName: "홍길동",
    },
  });
  const receiptEleRef = useRef<HTMLDivElement>(null);
  const remitterName = watch("remitterName");

  const receiptData = getDecodedStringifiedJSON(data) ?? {};

  const parsedData = receiptValidationSchema.parse({
    tossId,
    ...receiptData,
  });

  const totalPrice = parsedData.priceRows
    .map(({ count, price }) => count * price)
    .reduce((prev, next) => prev + next);

  const receiptTitle = `${parsedData.receiverName}님의 친구비 영수증`;
  const tossRemittanceURL = `https://toss.me/${tossId}/${totalPrice}`;

  const handleRemittance = () => {
    if (receiptEleRef.current) {
      toPng(receiptEleRef.current, { cacheBust: false }).then((dataURL) => {
        const downloadImageEle = document.createElement("a");
        downloadImageEle.download = `${receiptTitle}.png`;
        downloadImageEle.href = dataURL;
        downloadImageEle.click();
        downloadImageEle.remove();
        window.open(tossRemittanceURL, "_blank");
      });
    }
  };

  return (
    <>
      <main className="flex flex-col items-stretch justify-start gap-6 bg-gray-900 px-6 pb-6 pt-8">
        <Header
          title={`${parsedData.receiverName}님의 친구비 영수증`}
          description={`토스아이디: ${parsedData.tossId}`}
        />
        <div ref={receiptEleRef}>
          <Receipt
            {...parsedData}
            remitterName={remitterName}
            className="mx-auto w-[220px] animate-fade-in"
            variant="normal"
          />
        </div>
        <Controller
          control={control}
          name="remitterName"
          render={({ field }) => <FormTextInput {...field} label="내 이름" />}
        />
      </main>
      <FloatingBottomArea>
        <Button size="lg" className="w-full" onClick={handleRemittance}>
          {totalPrice.toLocaleString()} 친구비 보내기
        </Button>
      </FloatingBottomArea>
    </>
  );
}
