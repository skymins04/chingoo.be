import type { Meta, StoryObj } from "@storybook/react";
import { ReceiptVariantNormal } from ".";

export default {
  title: "Component/Receipt/Template",
  component: ReceiptVariantNormal,
  argTypes: {
    className: { type: "string" },
    title: { type: "string" },
    receiverName: { type: "string" },
    remitterName: { type: "string" },
    remitterTitle: { type: "string" },
    method: { type: "string" },
    footerMessage: { type: "string" },
    isShowDate: { type: "boolean" },
    isShowId: { type: "boolean" },
  },
  args: {
    className: "w-[250px]",
    title: "친구비 납부 영수증",
    receiverName: "강민수",
    remitterName: "김셔틀",
    remitterTitle: "납부자",
    method: "일시납부",
    footerMessage: "친구비 환불요청 절대 불가",
    isShowDate: true,
    isShowId: true,
    priceRows: [
      { name: "강민수친구1년연장계약", count: 1, price: 100000 },
      { name: "강민수1회호출권", count: 3, price: 10000 },
    ],
  },
} satisfies Meta<typeof ReceiptVariantNormal>;

export const Normal: StoryObj<typeof ReceiptVariantNormal> = {
  render: (props) => {
    return <ReceiptVariantNormal {...props} />;
  },
};
