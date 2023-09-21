import { Size } from "react-native-chart-kit/dist/HelperTypes";
import { Variant } from "../types";


export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    variant?: Variant;
    size?: Size;
    type?: ButtonType;
    outlined?: boolean
    disabled?: boolean;

}


export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset"
}