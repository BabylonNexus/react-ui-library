import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListGroup from "./ListGroup";
import ListItem from "../ListItem/ListItem";
import { faUser, faAnchor, faArrowsToDot, faAddressBook, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Divider from "../Divider/Divider";

const meta: Meta<typeof ListGroup> = {
    component: ListGroup,
    title: "UIKit/ListGroup",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ListGroup>
export const Default: Story = (args) => (
    <ListGroup style={{ width: "200px" }}>
        <ListItem data-test-id="InputField-id" as="a" href="https://www.google.com" target="_blank">Profile</ListItem>
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAnchor }} onClick={(e) => alert("hello")}>Item 2</ListItem>
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowsToDot }}>Item 3</ListItem>
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAddressBook }}>Item 4</ListItem>
        <Divider />
        <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowRightFromBracket }}>Logout</ListItem>
    </ListGroup>
);
Default.args = {

};
