import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Col from "./Col"
import Container from "../Container"
import Row from "../Row/Row";


const meta: Meta<typeof Col> = {
    component: Col,
    title: "UIKit/Col",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Col>;

export const Default: Story = (args) => (
    <Container>
        <Row>
            <Col  {...args} xs={4} >Test</Col>
            <Col  {...args} xs={{ span: 4, offset: 4 }}>Test</Col>
            <Col />

        </Row>
    </Container>
);
Default.args = {
    style: { background: "#216780", height: "50px", color: "white", }
};
