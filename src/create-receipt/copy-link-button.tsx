"use client";

import { Button } from "@/common/components";
import toast from "react-hot-toast";
import { copyText } from "@/common/utils";
import { useCreateReceiptFormContext } from "./form";
import { useState } from "react";

export type CreateReceiptCopyLinkButtonProps = {
  receiptId: string;
};

export const CreateReceiptCopyLinkButton = ({
  receiptId,
}: CreateReceiptCopyLinkButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    getValues,
    formState: { isValid },
  } = useCreateReceiptFormContext();

  const isDisabledButton = isLoading || !isValid;

  const handleCopyLink = async () => {
    setIsLoading(true);
    await toast
      .promise(
        fetch("/create/save", {
          method: "POST",
          body: JSON.stringify({ id: receiptId, receiptData: getValues() }),
        }).then(() => {
          const url = `${window.location.origin}/receipt/${receiptId}`;
          copyText(url);
        }),
        {
          loading: "영수증을 저장하는 중...",
          success: "클립보드에 링크가 복사됐습니다!",
          error: "클립보드에 링크를 복사하지 못했습니다 😭",
        },
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <Button
      disabled={isDisabledButton}
      onClick={handleCopyLink}
      color={isDisabledButton ? "secondary" : "primary"}
      size="lg"
      className="w-full"
    >
      링크 복사
    </Button>
  );
};
