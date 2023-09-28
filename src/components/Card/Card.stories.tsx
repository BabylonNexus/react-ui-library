import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import ListGroup from "../ListGroup/ListGroup";
import ListItem from "../ListItem/ListItem";
import { faUser, faAnchor, faArrowsToDot, faAddressBook, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Divider from "../Divider/Divider";

const meta: Meta<typeof Card> = {
    component: Card,
    title: "UIKit/Card",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = (args) => (
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Card data-test-id="InputField-id" {...args}>content</Card>
    </div>
);
Default.args = {

};

export const Large: Story = (args) => (
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Card data-test-id="InputField-id" {...args} style={{ width: "220px", height: "200px" }}>
            <ListGroup>
                <ListItem data-test-id="InputField-id" as="a" href="https://www.google.com" target="_blank">Profile</ListItem>
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAnchor }} onClick={(e) => alert("hello")}>Item 2</ListItem>
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowsToDot }}>Item 3</ListItem>
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAddressBook }}>Item 4</ListItem>
                <Divider />
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowRightFromBracket }}>Logout</ListItem>
            </ListGroup>
        </Card>
    </div>
);
Large.args = {

};
