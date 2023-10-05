import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Row from "./Row";


const meta: Meta<typeof Row> = {
    component: Row,
    title: "UIKit/Row",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Row>;

export const Default: Story = (args) => (
    <Row data-test-id="InputField-id" {...args}>Test</Row>
);
Default.args = {
    as: "span"
};
