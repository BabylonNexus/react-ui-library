import React from "react";
import { keyframes, styled } from "styled-components";
import { TabContentProps } from "./Tabs.types";
import classNames from "classnames";


const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }

`

const TabContentWrapper = styled.div`

    display: none;
    transform: translateX(100%);
    width: 100%;
    flex-basis: 100%;
    &.active{
        display: block;
         animation: ${slideIn} 0.5s ease forwards;
    }

`



const TabContent = React.forwardRef<HTMLElement, TabContentProps>((props: TabContentProps, ref: any) => {

    const { children, className, isActive, ...rest } = props

    return <TabContentWrapper {...rest} className={classNames(className, "tab-pane", isActive && 'active')} role="tabpanel" ref={ref}>{children}</TabContentWrapper>

})



export default TabContent