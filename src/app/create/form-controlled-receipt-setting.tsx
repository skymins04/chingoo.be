"use client";

import { Input } from "@/common/components";
import { useCreateReceiptFormContext } from "./form";
import { Controller } from "react-hook-form";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

export const FormControlledReceiptSetting = () => {
  const { control } = useCreateReceiptFormContext();

  return (
    <>
      <Controller
        name="tossId"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            isRequired
            label="토스아이디"
            placeholder="토스아이디를 입력해주세요"
            helpMessage={error?.message}
            status={error && "error"}
            labelRightArea={
              <Link
                href="https://toss.me"
                target="_blank"
                rel="noreferrer noopener"
                className="mb-1 inline-flex items-center justify-end gap-1 border-b-[1px] border-gray-400 text-sm duration-200 hover:text-white"
              >
                아이디 만들기/찾기 <IconExternalLink className="h-4 w-4" />
              </Link>
            }
          />
        )}
      />
    </>
  );
};
