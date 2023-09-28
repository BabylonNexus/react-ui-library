import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
    component: Divider,
    title: "UIKit/Divider",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = (args) => (
    <Divider data-test-id="InputField-id" {...args} />
);
Default.args = {

};
