
import { Position, Size, Variant } from "../Types/types";
import { IconProps } from "../Icon";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    variant?: Variant;
    size?: Size;
    type?: ButtonType;
    outlined?: boolean
    disabled?: boolean;
    isRounded?: boolean;
    icon?: IconProps,
    iconPosition?: Position,
    iconButton?: boolean,
    isLoading?: boolean;
    width?: ButtonWidth

}


export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset"
}

export enum ButtonWidth {
    Full = "full",
    Half = "half",
    Auto = "auto",
    Default = "default"
}