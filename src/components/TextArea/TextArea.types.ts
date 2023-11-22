import { IconProps } from "../Icon/Icon.types";


export interface TextAreaProps extends React.HTMLAttributes<HTMLElement> {
    icon?: IconProps;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    value?: any;
    maxLength?: number,
    description?: string,
    errorMsg?: string;
    rows?: number;
    cols?: number
    name?: string;
    onChange?: (e: any) => void

}