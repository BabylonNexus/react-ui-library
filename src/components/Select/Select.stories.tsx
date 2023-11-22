import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { faAdd, faAnchor } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon";
import InputField from "../InputField"

const meta: Meta<typeof Select> = {
    component: Select,
    title: "UIKit/Select",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = (args) => (
    <div style={{ width: "450px" }}><Select data-test-id="InputField-id" {...args} /> <InputField placeholder="Test..." icon={<Icon type="fontawesome" icon={faAnchor} />} /></div>
);
Default.args = {
    placeholder: "Select...",
    options: [{ label: "apple" },
    { label: "banana" },
    { label: "cherry" },
    { label: "cherry2" },
    { label: "date" },
    { label: "elderberry" },],
    onSelection: (item: any) => console.log(item),
    description: "This is test",
    icon: <Icon type="fontawesome" icon={faAnchor} />
};
