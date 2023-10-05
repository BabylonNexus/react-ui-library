


export interface ColProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType
    xs?: ColSpec;
    sm?: ColSpec;
    md?: ColSpec;
    lg?: ColSpec;
    xl?: ColSpec;
    xxl?: ColSpec;
    [key: string]: any;

}

export type NumberAttr =
    | number
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

export type ColOrderNumber = number | '1' | '2' | '3' | '4' | '5';
export type ColOrder = ColOrderNumber | 'first' | 'last';
export type ColSize = boolean | 'auto' | NumberAttr;
export type ColSpec =
    | ColSize
    | { span?: ColSize; offset?: NumberAttr; order?: ColOrder };

export const BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
export const MIN_BREAKPOINT = 'xs';

export interface UseColMetadata {
    as?: React.ElementType;
    prefix?: string
    spans: string[];
}