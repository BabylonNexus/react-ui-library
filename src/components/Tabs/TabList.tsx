import React from "react";
import { styled } from "styled-components";
import { TabListProps, } from "./Tabs.types";


const TabListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  border-bottom:1px solid var(--tab-border-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-top-left-radius: 0.5rem;
`


const TabList = React.forwardRef<HTMLElement, TabListProps>((props: TabListProps, ref: any) => {

    const { children, ...rest } = props

    return <TabListWrapper className="tab-list" role="tablist" {...rest} ref={ref}>{children}</TabListWrapper>

})


export default TabList 