"use client";

import { Controller, useFieldArray } from "react-hook-form";
import { IconTrash } from "@tabler/icons-react";
import {
  Button,
  FormItem,
  IconButton,
  NumberInput,
  TextInput,
} from "@/common/components";
import { CreateReciptForm, useCreateReceiptFormContext } from "./form";
import { getRandomInt } from "@/common/utils";
import { Fragment } from "react";

const CREATE_RECEIPT_EXAMPLE_ITEMS: CreateReciptForm["priceRows"] = [
  { name: "친구1년 재계약", count: 1, price: 10000 },
  { name: "1회호출권", count: 3, price: 1000 },
  { name: "용돈", count: 1, price: 50000 },
  { name: "훈수1회이용권", count: 5, price: 1000 },
];

export const ReceiptItemList = () => {
  const { control } = useCreateReceiptFormContext();
  const { fields, remove, prepend } = useFieldArray<
    CreateReciptForm,
    "priceRows"
  >({
    name: "priceRows",
  });

  const isRemovablePriceRows = fields.length > 1;

  const handleRemoveItem = (idx: number) => () => {
    if (isRemovablePriceRows) {
      remove(idx);
    }
  };
  const handleAddItem = () => {
    const randomIdx = getRandomInt(0, CREATE_RECEIPT_EXAMPLE_ITEMS.length - 1);
    const randomItem = CREATE_RECEIPT_EXAMPLE_ITEMS[randomIdx];
    prepend(randomItem);
  };

  return (
    <FormItem
      isRequired
      label="친구비 품목"
      labelRightArea={
        <Button size="sm" onClick={handleAddItem}>
          + 품목추가
        </Button>
      }
    >
      <div className="grid grid-cols-[5fr_2fr_2.5fr_0.5fr] gap-2">
        <label className="pl-1 text-sm">품목명</label>
        <label className="pl-1 text-sm">수량</label>
        <label className="pl-1 text-sm">단가</label>
        <span></span>
        {fields.map((field, idx) => (
          <Fragment key={field.id}>
            <Controller
              control={control}
              name={`priceRows.${idx}.name`}
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  {...field}
                  status={error && "error"}
                  className="w-full"
                />
              )}
            />
            <Controller
              control={control}
              name={`priceRows.${idx}.count`}
              render={({ field, fieldState: { error } }) => (
                <NumberInput
                  {...field}
                  status={error && "error"}
                  className="w-full"
                />
              )}
            />
            <Controller
              control={control}
              name={`priceRows.${idx}.price`}
              render={({ field, fieldState: { error } }) => (
                <NumberInput
                  {...field}
                  status={error && "error"}
                  className="w-full"
                />
              )}
            />
            <IconButton
              disabled={!isRemovablePriceRows}
              icon={IconTrash}
              onClick={handleRemoveItem(idx)}
            />
          </Fragment>
        ))}
      </div>
    </FormItem>
  );
};
