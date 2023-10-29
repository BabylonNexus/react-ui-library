import React from "react";
import { styled } from "styled-components";
import { TabProps } from "./Tabs.types";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";


const TabWrapper = styled.ul`
  
`


const Tab = React.forwardRef<HTMLElement, TabProps>(function Tab(props: TabProps, ref: any) {
    const { children, ...rest } = props

    return <TabWrapper {...rest} ref={ref}>{children}</TabWrapper>
})

Tab.displayName = "Tab"

export default Object.assign(Tab, {
    Title: TabTitle,
    Content: TabContent,

})  