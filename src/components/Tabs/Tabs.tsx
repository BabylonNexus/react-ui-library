import React, { Component, Fragment, useState, createRef, useEffect } from "react";
import { styled } from "styled-components";
import { TabsProps } from "./Tabs.types";
import TabList from "./TabList";
import { TabComponent, extractComponets, extractTabComponents } from "./utils";
import classNames from "classnames";


const TabsWrapper = styled.div`
  
`

const TabContentsWrapper = styled.div`
    overflow-x: hidden;
    display: flex;
`



const Tabs = React.forwardRef<HTMLElement, TabsProps>((props: TabsProps, ref: any) => {

    const { children, className, selectedTab, onTabChange, ...rest } = props

    const onTabSelect = (ref: any) => {
        let index = 0;
        for (let title of titles) {
            if (title.ref === ref) {

                title.node = React.cloneElement(title.node, { isActive: true })

                contents.forEach((content, i) => {
                    content.node = React.cloneElement(content.node, { isActive: i === index })
                })

                onTabChange && onTabChange(index)
            } else {
                title.node = React.cloneElement(title.node, { isActive: false })
            }
            index++;
        }

        setTitles([...titles])
        setContents([...contents])
    }

    const [t, c] = extractComponets(children, onTabSelect, selectedTab ?? 0)

    const [titles, setTitles] = useState<TabComponent[]>(t)
    const [contents, setContents] = useState<TabComponent[]>(c)

    return <TabsWrapper  {...rest} className={classNames(className, "tabs")} ref={ref}>
        <TabList>
            {titles.map((title, index) => (<Fragment key={index}>{title.node}</Fragment>))}
        </TabList>
        <TabContentsWrapper className="tab-content">
            {contents.map((content, index) => (<Fragment key={index}>{content.node}</Fragment>))}
        </TabContentsWrapper>
    </TabsWrapper>

})


export default Tabs