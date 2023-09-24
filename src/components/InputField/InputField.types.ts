import { IconProps } from "../Icon";

export interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: IconProps
    errorMsg?: string;
    maxLength?: number;
    description?: string;
    value?: any
    type?: InputType,
    placeholder?: string;
}

export type InputType = | 'email' | 'text' | 'password' | 'number' | 'url' | 'search'