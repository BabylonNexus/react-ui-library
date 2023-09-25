import { IconProps } from "../Icon";

export interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: IconProps
    name?: string;
    errorMsg?: string;
    maxLength?: number;
    description?: string;
    value?: any
    type?: InputType | InputTypeEnum,
    placeholder?: string;
    required?: boolean;
    disabled?: boolean
}

export type InputType = | 'email' | 'text' | 'password' | 'number' | 'url' | 'search'
export enum InputTypeEnum {
    Email = "email",
    Text = "text",
    Password = "password",
    Number = "number",
    Url = "url",
    Search = "search"
}