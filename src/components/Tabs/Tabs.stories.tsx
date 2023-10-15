import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "./Tab"
import Icon from "../Icon"
import Button from "../Button"
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { styled } from "styled-components";
const meta: Meta<typeof Tabs> = {
    component: Tabs,
    title: "UIKit/Tabs",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = (args) => (
    <Tabs data-test-id="InputField-id" {...args}>
        <Tab>
            <Tab.Title>Title1</Tab.Title>
            <Tab.Content>Content1</Tab.Content>
        </Tab>
        <Tab>
            <Tab.Title>Titl2</Tab.Title>
            <Tab.Content><div><ul>
                <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li></ul></div></Tab.Content>
        </Tab>
    </Tabs>
);
Default.args = {
    onTabChange: (index: number) => console.log(index)
};
