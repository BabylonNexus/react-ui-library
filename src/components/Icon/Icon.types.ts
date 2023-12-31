import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    type: IconType | IconTypeEnum,
    icon: IconDefinition,
    className?: string;
    style?: object;
    color?: string;

}


export enum IconTypeEnum {
    FontAwesome = "fontawesome"
}

export type IconType = 'fontawesome'