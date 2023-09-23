import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IconProps {
    type: IconType,
    icon: IconDefinition,
    className?: string;
    style?: object;
    color?: string;

}


export enum IconType {
    FontAwesome = "fontawesome"
}