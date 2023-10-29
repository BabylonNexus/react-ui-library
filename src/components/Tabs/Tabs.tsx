import React, { Component, Fragment, useState, createRef, useEffect } from "react";
import { styled } from "styled-components";
import { TabsProps } from "./Tabs.types";
import TabList from "./TabList";
import { TabComponent, extractComponets, extractTabComponents } from "./utils";
import classNames from "classnames";
import { withSSR } from "../../utils";


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

    const [initialTitles, initialContents] = extractComponets(children, onTabSelect, selectedTab ?? 0)


    const [titles, setTitles] = useState<TabComponent[]>(initialTitles)
    const [contents, setContents] = useState<TabComponent[]>(initialContents)




    return <TabsWrapper  {...rest} className={classNames(className, "tabs")} ref={ref}>
        <TabList>
            {withSSR<TabComponent[]>(initialTitles, titles).map((title, index) => (<Fragment key={index}>{title.node}</Fragment>))}
        </TabList>
        <TabContentsWrapper className="tab-content">
            {withSSR<TabComponent[]>(initialContents, contents).map((content, index) => (<Fragment key={index}>{content.node}</Fragment>))}
        </TabContentsWrapper>
    </TabsWrapper>

})


export default Tabs