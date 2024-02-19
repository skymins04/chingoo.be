"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { copyText } from "@/common/utils";
import { Button } from "@/common/components";
import { useCreateReceiptFormContext } from "./form";

export const CreateReceiptCopyLinkButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [existReceiptId, setExistReceiptId] = useState<string | undefined>(
    undefined,
  );

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
          body: JSON.stringify({
            id: existReceiptId,
            receiptData: getValues(),
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            const url = `${window.location.origin}/receipt/${res.id}`;
            setExistReceiptId(res.id);
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
