import React from "react";
import { RowProps } from "./Row.types";
import { styled } from "styled-components";
import classNames from "classnames";


const RowWrapper = styled.div`
  
`

const Row = React.forwardRef<HTMLElement, RowProps>((props: RowProps, ref: any) => {

    const { children, className, as, ...rest } = props


    return <RowWrapper {...rest} className={classNames(className, 'row')} ref={ref} as={as}>{children}</RowWrapper>

})


export default Row