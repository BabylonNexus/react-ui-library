
export interface SelectProps extends React.HTMLAttributes<HTMLInputElement> {
    searchable?: boolean,
    placeholder?: string,
    multiSelect?: boolean,
    disabled?: boolean;
    options?: IOption[];
    errorMsg?: string;
    value?: IOption | IOption[]
    description?: string;
    required?: boolean;
    icon?: React.ReactNode
    onSelection?: (item: IOption) => void
}

export interface IOption {
    label: string;
    [key: string]: any;
}