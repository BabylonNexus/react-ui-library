import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: "UIKit/Modal",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = (args) => (
    <Modal data-test-id="InputField-id" {...args}>
        <div>Content</div>
    </Modal>
);
Default.args = {

};
