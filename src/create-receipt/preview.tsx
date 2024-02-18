"use client";

import { useWatch } from "react-hook-form";
import { Receipt } from "@/common/components";
import { CreateReciptForm } from "./form";
import { useMemo } from "react";

export const CreateReceiptPreview = () => {
  const receiptFormValues = useWatch<CreateReciptForm>() as CreateReciptForm;

  return (
    <section className="h-[250px] w-full overflow-y-auto overflow-x-hidden rounded-2xl bg-gray-600 p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-800">
      <Receipt className="mx-auto w-[220px]" {...receiptFormValues} />
    </section>
  );
};
