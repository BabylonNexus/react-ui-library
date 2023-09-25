import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { faUser, faShareNodes, faCirclePlus } from "@fortawesome/free-solid-svg-icons";


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
    type: "button",
    role: "button",
    "aria-label": "Test",
    "aria-labelledby": "Labelled By",
    onClick: (e) => alert("Fire"),
};

export const WithIcon: Story = (args) => (
    <Button data-test-id="InputField-id" {...args}>Pievienot sludinājumu</Button>
);

WithIcon.args = {
    role: "button",
    "aria-label": "Test",
    "aria-labelledby": "Labelled By",
    onClick: (e) => alert("Fire"),
    icon: {
        type: "fontawesome",
        icon: faCirclePlus
    }
};

export const SmallButton: Story = (args) => (
    <Button data-test-id="InputField-id" {...args}>Click Me</Button>
);

SmallButton.args = {
    role: "button",
    size: "small",
    "aria-label": "Test",
    "aria-labelledby": "Labelled By",
    onClick: (e) => alert("Fire"),
    icon: {
        type: "fontawesome",
        icon: faUser
    }
};

export const IconButton: Story = (args) => (
    <Button data-test-id="InputField-id" {...args}>Click Me</Button>
);

IconButton.args = {
    role: "button",
    size: "medium",
    iconButton: true,
    "aria-label": "Test",
    "aria-labelledby": "Labelled By",
    onClick: (e) => alert("Fire"),
    icon: {
        type: "fontawesome",
        icon: faShareNodes
    }
};