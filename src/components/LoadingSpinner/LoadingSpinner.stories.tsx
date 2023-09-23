import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";


const meta: Meta<typeof LoadingSpinner> = {
    component: LoadingSpinner,
    title: "UIKit/LoadingSpinner",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = (args) => (
    <LoadingSpinner data-test-id="InputField-id" {...args} />
);
Default.args = {
    // color: "green",
    // type: IconType.FontAwesome
};
