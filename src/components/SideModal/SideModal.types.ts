

export interface SideModalProps extends React.HTMLAttributes<HTMLInputElement> {
    isOpen?: boolean;
    width?: string;
    onClose?: () => void
}

export interface SideModalHeaderProps extends React.HTMLAttributes<HTMLInputElement> {
    closeBtn?: boolean;
    onClose?: (e: any) => void
}