


export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
    selectedTab?: number;
    onTabChange?: (index: number) => void
}


export interface TabListProps extends React.HTMLAttributes<HTMLElement> {

}


export interface TabProps extends React.HTMLAttributes<HTMLElement> {

}


export interface TabTitleProps extends React.HTMLAttributes<HTMLElement> {
    onSelect?: (e: any) => void
    isActive?: boolean
}

export interface TabContentProps extends React.HTMLAttributes<HTMLElement> {
    isActive?: boolean
}