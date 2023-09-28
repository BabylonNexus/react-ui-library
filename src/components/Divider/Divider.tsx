import React from 'react'
import { DividerProps } from './Divider.types';
import { styled } from 'styled-components';
import classNames from 'classnames';


const DividerWrapper = styled.div`
   height: 1px;
   background-color:var(--divider-color);
   margin: 0.3rem;
`


const Divider = React.forwardRef<HTMLElement, DividerProps>((props: DividerProps, ref: any) => {

    const { className, ...rest } = props

    return <DividerWrapper role="separator" className={classNames(className, "divider")} {...rest} ref={ref}></DividerWrapper>

})

export default Divider;