import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./CheckBox";


const meta: Meta<typeof CheckBox> = {
    component: CheckBox,
    title: "UIKit/CheckBox",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckBox>

export const Default: Story = (args) => (
    <CheckBox data-test-id="InputField-id" {...args}>
    </CheckBox>
);
Default.args = {

};
