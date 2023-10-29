import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SideModal from "./SideModal";
import Button from "../Button/Button";

const meta: Meta<typeof SideModal> = {
    component: SideModal,
    title: "UIKit/SideModal",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SideModal>;

//const [open, setOpen] = useState(false)

export const Default: Story = (args) => (

    <>

        <SideModal data-test-id="InputField-id" isOpen={true} {...args} onClose={(e) => console.log("called2")}>
            <SideModal.Header closeBtn>Side Modal Example</SideModal.Header>
            <SideModal.Content>Content</SideModal.Content>
            <SideModal.Footer>Footer</SideModal.Footer>
        </SideModal>
    </>


);
Default.args = {
    //isOpen: true
};
