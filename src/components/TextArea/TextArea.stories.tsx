import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof TextArea> = {
    component: TextArea,
    title: "UIKit/TextArea",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = (args) => (
    <div style={{ width: "350px" }}>
        <TextArea data-test-id="InputField-id" {...args} placeholder="Descrption" rows={5} />
    </div>
);
Default.args = {
    icon: { type: "fontawesome", icon: faFileLines }
};
