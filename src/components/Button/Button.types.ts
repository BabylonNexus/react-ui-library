
import { Position, Size, VariantEnum, Variant } from "../Types/types";
import { IconProps } from "../Icon";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    as?: string
    href?: string;
    target?: string
    variant?: Variant | VariantEnum;
    size?: Size;
    type?: ButtonType | ButtonTypeEnum;
    outlined?: boolean
    disabled?: boolean;
    isRounded?: boolean;
    icon?: IconProps,
    iconPosition?: Position,
    iconButton?: boolean,
    isLoading?: boolean;
    width?: ButtonWidth | ButtonWidthEnum

}

export type ButtonType = 'button' | 'submit' | 'reset'

export enum ButtonTypeEnum {
    Button = "button",
    Submit = "submit",
    Reset = "reset"
}

export enum ButtonWidthEnum {
    Full = "full",
    Half = "half",
    Auto = "auto",
    Default = "default"
}

export type ButtonWidth = 'full' | 'half' | 'auto' | 'default'