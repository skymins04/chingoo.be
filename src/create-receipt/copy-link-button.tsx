"use client";

import { Button } from "@/common/components";
import toast from "react-hot-toast";
import { copyText } from "@/common/utils";
import { useCreateReceiptFormContext } from "./form";

export type CreateReceiptCopyLinkButtonProps = {
  receiptId: string;
};

export const CreateReceiptCopyLinkButton = ({
  receiptId,
}: CreateReceiptCopyLinkButtonProps) => {
  const {
    getValues,
    formState: { isValid },
  } = useCreateReceiptFormContext();

  const handleCopyLink = () =>
    fetch("/create/save", {
      method: "POST",
      body: JSON.stringify({ id: receiptId, receiptData: getValues() }),
    })
      .then(() => {
        const url = `${window.location.origin}/receipt/${receiptId}`;
        copyText(url);

        toast.success("클립보드에 링크가 복사됐습니다!");
      })
      .catch(() => {
        toast.error("클립보드에 링크를 복사하지 못했습니다 😭");
      });

  return (
    <Button
      disabled={!isValid}
      onClick={handleCopyLink}
      color={isValid ? "primary" : "secondary"}
      size="lg"
      className="w-full"
    >
      링크 복사
    </Button>
  );
};
