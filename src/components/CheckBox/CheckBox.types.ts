
export interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    checked?: boolean,
    name?: string,
    description?: string;
    errorMsg?: string;
    disabled?: boolean
    required?: boolean
    onChange?: (e: any) => void
}

