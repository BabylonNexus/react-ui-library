import React from "react";
import { FloatingCardProps } from "./FloatingCard.types";
import Card from "../Card";
import { PositionEnum } from "../Types";





const FloatingCard = React.forwardRef<HTMLElement, FloatingCardProps>((props: FloatingCardProps, ref: any) => {

    const { top, left, children, style, visible, ...rest } = props

    const styles = {
        ...style,
        position: "absolute",
        top: top ?? 0,
        left: left ?? 0,
        display: visible ? "block" : "none"
    } as React.CSSProperties;

    return <Card {...rest} style={styles} ref={ref}>{children}</Card>

})


export default FloatingCard;