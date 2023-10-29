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

export const Default: Story = (args) => {
    return <LoadingSpinner data-test-id="InputField-id"  {...args} />
}

Default.args = {

    color: "green",
    fontSize: "3px"
    // type: IconType.FontAwesome
};
