import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";


const meta: Meta<typeof InputField> = {
    component: InputField,
    title: "UIKit/InputField",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = (args) => (
    <InputField data-test-id="InputField-id" {...args} type="text" />
);
Default.args = {
};
