import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { IconType } from "../Icon";
import { faUser, faShareNodes, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Size } from "../Types/types";
import { ButtonType } from "./Button.types";

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
    type: ButtonType.Button,
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
        type: IconType.FontAwesome,
        icon: faCirclePlus
    }
};

export const SmallButton: Story = (args) => (
    <Button data-test-id="InputField-id" {...args}>Click Me</Button>
);

SmallButton.args = {
    role: ButtonType.Button,
    size: Size.Small,
    "aria-label": "Test",
    "aria-labelledby": "Labelled By",
    onClick: (e) => alert("Fire"),
    icon: {
        type: IconType.FontAwesome,
        icon: faUser
    }
};

export const IconButton: Story = (args) => (
    <Button data-test-id="InputField-id" {...args}>Click Me</Button>
);

IconButton.args = {
    role: ButtonType.Button,
    size: Size.Medium,
    iconButton: true,
    "aria-label": "Test",
    "aria-labelledby": "Labelled By",
    onClick: (e) => alert("Fire"),
    icon: {
        type: IconType.FontAwesome,
        icon: faShareNodes
    }
};