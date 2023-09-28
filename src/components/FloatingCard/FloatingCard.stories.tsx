import React, { useState } from "react";
import { Meta, StoryObj, storiesOf } from "@storybook/react";
import FloatingCard from "./FloatingCard";
import ListGroup from "../ListGroup/ListGroup";
import ListItem from "../ListItem/ListItem";
import { faUser, faListDots, faAnchor, faArrowsToDot, faAddressBook, faArrowRightFromBracket, faL } from "@fortawesome/free-solid-svg-icons"
import Divider from "../Divider/Divider";
import Button from "../Button/Button"
import useComponentVisible from "../Hooks/useComponentVisible"
const meta: Meta<typeof FloatingCard> = {
    component: FloatingCard,
    title: "UIKit/FloatingCard",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FloatingCard>;



export const Default: Story = (args) => (

    <div style={{ position: "relative" }}>
        <FloatingCard data-test-id="InputField-id" {...args}>
            <ListGroup style={{ width: "200px" }}>
                <ListItem data-test-id="InputField-id" as="a" href="https://www.google.com" target="_blank">Profile</ListItem>
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAnchor }} onClick={(e) => alert("hello")}>Item 2</ListItem>
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowsToDot }}>Item 3</ListItem>
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAddressBook }}>Item 4</ListItem>
                <Divider />
                <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowRightFromBracket }}>Logout</ListItem>
            </ListGroup>
        </FloatingCard>
    </div>
);
Default.args = {
    top: "50px",
    left: "50px",
    visible: false

};


export const withHookExample = ({ onClose, isOpen, ...args }) => {

    const { ref, isVisible, setIsVisible } = useComponentVisible(false)

    args = {
        top: "50px",
        left: "50px",
        visible: false

    };


    return (
        <div style={{ position: "relative" }}>
            <Button variant="secondary" outlined iconButton icon={{ type: "fontawesome", icon: faListDots }} onClick={(e) => setIsVisible(prev => !prev)} />
            <FloatingCard data-test-id="InputField-id" {...args} visible={isVisible} ref={ref}>
                <ListGroup style={{ width: "200px" }}>
                    <ListItem data-test-id="InputField-id" as="a" href="https://www.google.com" target="_blank">Profile</ListItem>
                    <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAnchor }} onClick={(e) => alert("hello")}>Item 2</ListItem>
                    <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowsToDot }}>Item 3</ListItem>
                    <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faAddressBook }}>Item 4</ListItem>
                    <Divider />
                    <ListItem data-test-id="InputField-id" icon={{ type: "fontawesome", icon: faArrowRightFromBracket }}>Logout</ListItem>
                </ListGroup>
            </FloatingCard>
        </div>
    );
};