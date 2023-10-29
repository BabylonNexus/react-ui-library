import React from "react";
import { styled } from "styled-components";
import { TabTitleProps } from "./Tabs.types";
import classNames from "classnames";


const TabTtitleWrapper = styled.li`
  padding: 1rem 2rem;
    
    &:hover{
        cursor: pointer;
    }
   box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    &.active{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
`


const ButtonWrapper = styled.button`
 background-color: transparent;
 border:none;

  &:hover{
    cursor: pointer;
  }
`


const TabTitle = React.forwardRef<HTMLElement, TabTitleProps>(function TabTitle(props: TabTitleProps, ref: any) {
    const { children, isActive, className, onSelect, onClick, ...rest } = props

    const onPress = (e: any) => {
        onClick && onClick(e);
        onSelect && onSelect(ref)
    }

    return <TabTtitleWrapper role="presentation" {...rest} className={classNames(className, "tab-title", isActive && "active")} ref={ref} onClick={onPress}><ButtonWrapper type="button" role="tab">{children}</ButtonWrapper></TabTtitleWrapper>
})

TabTitle.displayName = "TabTitle"

export default TabTitle   