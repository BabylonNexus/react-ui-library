import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Container from "../Container";


const meta: Meta<typeof Container> = {
    component: Container,
    title: "UIKit/Container",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Container>

export const Default: Story = (args) => (
    <Container data-test-id="InputField-id" {...args}>

        <div>Test</div>

    </Container>
);
Default.args = {

};
