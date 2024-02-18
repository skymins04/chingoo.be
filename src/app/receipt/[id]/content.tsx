"use client";

import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { toPng } from "html-to-image";
import {
  Button,
  FloatingBottomArea,
  FormTextInput,
  Header,
  Receipt,
} from "@/common/components";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateReciptForm } from "@/create-receipt/form";

export const ViewReceiptPageContent = ({
  receiptData,
}: {
  receiptData: CreateReciptForm;
}) => {
  const { priceRows, receiverName, tossId } = receiptData;

  const [isLoading, setIsLoading] = useState(false);
  const receiptEleRef = useRef<HTMLDivElement>(null);
  const {
    control,
    watch,
    trigger,
    formState: { isValid },
  } = useForm<{ remitterName: string }>({
    mode: "all",
    resolver: zodResolver(
      z.object({
        remitterName: z.string().min(1, "이름을 입력해주세요."),
      }),
    ),
    defaultValues: {
      remitterName: "",
    },
  });
  const remitterName = watch("remitterName");

  const totalPrice = priceRows
    .map(({ count, price }) => count * price)
    .reduce((prev, next) => prev + next);
  const receiptTitle = `${receiverName}님의 친구비 영수증`;
  const tossRemittanceURL = `https://toss.me/${tossId}/${totalPrice}`;
  const isDisabledButton = isLoading || !isValid;

  const handleRemittance = () => {
    if (receiptEleRef.current) {
      setIsLoading(true);
      toPng(receiptEleRef.current, { cacheBust: false })
        .then((dataURL) => {
          const downloadImageEle = document.createElement("a");
          downloadImageEle.download = `${receiptTitle}.png`;
          downloadImageEle.href = dataURL;
          downloadImageEle.click();
          downloadImageEle.remove();
        })
        .then(() => toast.success("영수증 이미지가 다운로드 되었어요!"))
        .then(() => setIsLoading(false))
        .then(() => window.open(tossRemittanceURL, "_blank"));
    }
  };

  useEffect(function initViewReceipt() {
    trigger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="flex flex-col items-stretch justify-start gap-6 bg-gray-900 px-6 pb-6 pt-8">
        <Header
          title={`${receiverName}님의 친구비 영수증`}
          description={`토스아이디: ${tossId}`}
        />
        <div ref={receiptEleRef}>
          <Receipt
            {...receiptData}
            remitterName={remitterName}
            className="mx-auto w-[220px] animate-fade-in"
            variant="normal"
          />
        </div>
        <Controller
          control={control}
          name="remitterName"
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              {...field}
              isRequired
              status={error && "error"}
              helpMessage={error?.message}
              label="내 이름"
            />
          )}
        />
      </main>
      <FloatingBottomArea>
        <Button
          size="lg"
          className="w-full"
          onClick={handleRemittance}
          disabled={isDisabledButton}
          color={isDisabledButton ? "secondary" : "primary"}
        >
          {isLoading
            ? "영수증 이미지 저장 중..."
            : `${totalPrice.toLocaleString("ko-KR")}월 친구비 보내기`}
        </Button>
      </FloatingBottomArea>
    </>
  );
};
