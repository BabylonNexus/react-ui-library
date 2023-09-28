import { IconProps } from "../Icon";

export interface ListItemProps extends React.HTMLAttributes<HTMLElement> {
    icon?: IconProps
    as?: string;
    target?: string;
    href?: string
} 