"use client";

import { Button } from "@/common/components";
import toast from "react-hot-toast";
import { copyText, getEncodedStringifiedJSON } from "@/common/utils";
import { useCreateReceiptFormContext } from "./form";

export const CreateReceiptCopyLinkButton = () => {
  const {
    getValues,
    formState: { isValid },
  } = useCreateReceiptFormContext();

  const handleCopyLink = () => {
    try {
      const { tossId, ...values } = getValues();

      const data = getEncodedStringifiedJSON(values);
      const url = `${window.location.origin}/receipt/${tossId}?data=${data}`;
      copyText(url);

      toast.success("클립보드에 링크가 복사됐습니다!");
    } catch {
      toast.error("클립보드에 링크를 복사하지 못했습니다 😭");
    }
  };

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
