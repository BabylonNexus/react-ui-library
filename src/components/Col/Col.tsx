import React from "react";
import { BREAKPOINTS, ColProps, MIN_BREAKPOINT, UseColMetadata, ColSize, NumberAttr, ColOrder } from "./Col.types";
import classNames from "classnames";


export function useCol({
    as,
    className,
    ...props
}: ColProps): [any, UseColMetadata] {
    const prefix = "col"
    const breakpoints = BREAKPOINTS
    const minBreakpoint = MIN_BREAKPOINT

    const spans: string[] = [];
    const classes: string[] = [];

    breakpoints.forEach((brkPoint) => {
        const propValue = props[brkPoint];
        delete props[brkPoint];

        let span: ColSize | undefined;
        let offset: NumberAttr | undefined;
        let order: ColOrder | undefined;

        if (typeof propValue === 'object' && propValue != null) {
            ({ span, offset, order } = propValue);
        } else {
            span = propValue;
        }

        const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';


        if (span)
            spans.push(
                span === true ? `${prefix}${infix}` : `${prefix}${infix}-${span}`,
            );

        if (order != null) classes.push(`order${infix}-${order}`);
        if (offset != null) classes.push(`offset${infix}-${offset}`);
    });

    return [
        { ...props, className: classNames(className, ...spans, ...classes) },
        {
            as,
            prefix,
            spans,
        },
    ];
}

const Col = React.forwardRef<HTMLElement, ColProps>((props: ColProps, ref: any) => {
    const [
        { className, ...colProps },
        { as: Component = 'div', prefix, spans },
    ] = useCol(props);

    return <Component {...colProps} className={classNames(className, !spans.length && prefix)} ref={ref} />

})


export default Col;