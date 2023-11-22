
export interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
    isRounded?: boolean;
    name?: string;
    errorMsg?: string;
    maxLength?: number;
    description?: string;
    value?: any
    type?: InputType | InputTypeEnum,
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    onReset?: () => void
}

export type InputType = 'email' | 'text' | 'password' | 'number' | 'url' | 'search'
export enum InputTypeEnum {
    Email = "email",
    Text = "text",
    Password = "password",
    Number = "number",
    Url = "url",
    Search = "search"
}