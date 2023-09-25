import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import { IconType } from "./Icon.types";

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: "UIKit/Icon",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = (args) => (
    <Icon data-test-id="InputField-id" {...args} />
);
Default.args = {
    color: "green",
    type: "fontawesome"
};
