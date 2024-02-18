"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";
import { IconExternalLink } from "@tabler/icons-react";
import { FormTextInput } from "@/common/components";
import { useCreateReceiptFormContext } from "./form";
import { ReceiptItemList } from "./item-list-input";

export const CreateReceiptInput = () => {
  const { control } = useCreateReceiptFormContext();

  return (
    <>
      <Controller
        name="tossId"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormTextInput
            {...field}
            isRequired
            autoComplete="off"
            label="토스아이디"
            helpMessage={
              error?.message ?? "토스 앱에서 토스아이디를 찾아 입력해주세요."
            }
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
      <div className="flex w-full items-start justify-between gap-2">
        <Controller
          name="receiverName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              {...field}
              isRequired
              autoComplete="off"
              label="내이름"
              helpMessage={error?.message}
              status={error && "error"}
              wrapperClassName="flex-1"
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormTextInput
              {...field}
              isRequired
              autoComplete="off"
              label="영수증 제목"
              helpMessage={error?.message}
              status={error && "error"}
              wrapperClassName="flex-1"
            />
          )}
        />
      </div>
      <ReceiptItemList />
    </>
  );
};
