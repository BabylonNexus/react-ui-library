

export interface ModalProps extends React.HTMLAttributes<HTMLInputElement> {
    isOpen?: boolean;
    showCloseBtn?: boolean;
    onClose?: () => void
}