import { IconArrowLeft } from "@tabler/icons-react";
import {
  Button,
  FloatingBottomArea,
  Header,
  IconButton,
} from "@/common/components";
import Link from "next/link";
import { CreateReceiptFormProvider } from "./form";
import { FormControlledReceipt } from "./form-controlled-receipt";
import { FormControlledReceiptSetting } from "./form-controlled-receipt-setting";

export default function CreatePage() {
  return (
    <CreateReceiptFormProvider>
      <main className="flex flex-col items-stretch justify-start gap-6 bg-gray-900 px-6 pb-6 pt-8">
        <Header
          title="친구비 링크 만들기"
          leftArea={
            <Link href="/">
              <IconButton icon={IconArrowLeft} className="h-full w-full" />
            </Link>
          }
        />

        <section className="h-[250px] w-full overflow-y-auto overflow-x-hidden rounded-2xl bg-gray-600 p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-800">
          <FormControlledReceipt className="mx-auto w-[220px]" />
        </section>

        <FormControlledReceiptSetting />
      </main>
      <FloatingBottomArea>
        <Button size="lg" className="w-full">
          링크 복사
        </Button>
      </FloatingBottomArea>
    </CreateReceiptFormProvider>
  );
}
