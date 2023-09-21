import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "UIKit/Button",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
    <Button data-test-id="InputField-id" {...args}>Click Me</Button>
);
Primary.args = {
    role: "button",
    "aria-label": "Test",
    "aria-labelledby": "Labelled By",
    onClick: (e) => alert("Fire")
};
