import React, { ReactElement, RefObject, createRef } from "react";
import { ReactNode } from "react";


export interface TabComponent {
    node: ReactElement;
    ref: RefObject<any>
}


//const getActiveTabIndex = (e:any)=?

const createTabTitle = (node: ReactElement, callBack: (e: any) => void, isActive: boolean) => {
    const ref = node?.props?.ref ?? createRef()
    return {
        ref: ref,
        node: React.cloneElement(node, {
            ref: ref,
            isActive: isActive,
            onSelect: (e: any) => {
                callBack(e);
                node?.props?.onSelect && node?.props?.onSelect(e)
            }
        })
    }
}

const createTabContent = (node: ReactElement, isActive: boolean) => {
    const ref = node?.props?.ref ?? createRef();
    return {
        ref: ref,
        node: React.cloneElement(node, {
            isActive: isActive,
            ref: ref
        })
    }
}




export const extractComponets = (children: ReactNode, tabSelectCallback: (e: any) => void, selectedIndex: number) => {
    const components: any[] = React.Children.toArray(children)
    const titles: TabComponent[] = []
    const contents: TabComponent[] = []

    let index = 0

    for (const component of components) {
        extractTabComponents(component?.props?.children, titles, contents, tabSelectCallback, selectedIndex === index)
        index++
    }

    return [titles, contents]
}



export const extractTabComponents = (children: ReactNode, titles: TabComponent[], contents: TabComponent[], tabSelectCallback: (e: any) => void, isActive: boolean) => {

    if (typeof children !== "object") return

    const arr: any[] = React.Children.toArray(children)

    for (const child of arr) {

        const name = child?.type?.displayName

        if (name === "TabTitle") {
            titles.push(createTabTitle(child, tabSelectCallback, isActive))

        } else if (name === "TabContent") {
            contents.push(createTabContent(child, isActive))
        }
    }

}