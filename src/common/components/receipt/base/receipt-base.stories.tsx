import type { Meta, StoryObj } from "@storybook/react";
import { ReceiptBase } from "./receipt-base";

export default {
  title: "Component/Receipt/Base",
  component: ReceiptBase,
} satisfies Meta<typeof ReceiptBase>;

export const Default: StoryObj<typeof ReceiptBase> = {
  args: {
    className: "w-[300px]",
  },
  render: (props) => {
    return <ReceiptBase {...props}>test</ReceiptBase>;
  },
};
