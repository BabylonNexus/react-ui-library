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
    <div style={{ width: "300px" }}> <InputField data-test-id="InputField-id" {...args} /></div>
);
WithIcon.args = {
    icon: {
        type: "fontawesome",
        icon: faMagnifyingGlass
    },
    placeholder: "First Name",
};


export const Default: Story = (args) => (
    <div style={{ width: "300px" }}> <InputField data-test-id="InputField-id" {...args} /></div>
);
Default.args = {
    placeholder: "First Name",
    errorMsg: "First Name is Invalid"
};


export const MultipleInputs: Story = (args) => (
    <div style={{ width: "300px" }}> <InputField data-test-id="InputField-id" {...args} /><InputField data-test-id="InputField-id" {...args} /></div>
);
MultipleInputs.args = {
    placeholder: "First Name"
};
