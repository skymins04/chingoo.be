import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {},
  args: {
    children: "hello 세상123!",
    size: "md",
    color: "primary",
    variant: "rounded",
  },
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  render: (props) => {
    return <Button {...props} />;
  },
};
