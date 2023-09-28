import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListItem from "./ListItem";
import { faUser, faAnchor, faArrowsToDot, faAddressBook, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Divider from "../Divider/Divider";


const meta: Meta<typeof ListItem> = {
    component: ListItem,
    title: "UIKit/ListItem",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ListItem>;

//icon={{ type: "fontawesome", icon: faUser }}
export const Default: Story = (args) => (
    <ul style={{ width: "200px", padding: "0px", margin: "0px" }}>
        <ListItem data-test-id="InputField-id" >Profile</ListItem>
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAnchor }}>Item 2</ListItem>
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowsToDot }}>Item 3</ListItem>
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAddressBook }}>Item 4</ListItem>
        <Divider />
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowRightFromBracket }}>Logout</ListItem>
    </ul>
);
Default.args = {
    icon: { type: "fontawesome", icon: faUser }
};
