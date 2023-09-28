import { GridBreakpoint, GridBreakpointEnum } from "../Types/types";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {

    size?: GridBreakpoint | GridBreakpointEnum

}
