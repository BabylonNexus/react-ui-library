import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconType } from "../Icon";


const meta: Meta<typeof InputField> = {
    component: InputField,
    title: "UIKit/InputField",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const WithIcon: Story = (args) => (
    <InputField data-test-id="InputField-id" {...args} />
);
WithIcon.args = {
    icon: {
        type: IconType.FontAwesome,
        icon: faMagnifyingGlass
    }
};


export const Default: Story = (args) => (
    <InputField data-test-id="InputField-id" {...args} />
);
Default.args = {

    onChange: (e) => {
        console.log("outer")
    },
};