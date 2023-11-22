import { useRef, useState } from "react";

export const useReferredState = <T>(
    initialValue: T | null = null
): [T | null, React.MutableRefObject<T | null>, React.Dispatch<T>] => {
    const [state, setState] = useState<T | null>(initialValue);
    const reference = useRef<T | null>(state);

    const setReferredState = (value: any) => {
        reference.current = value;
        setState(value);
    };

    return [state, reference, setReferredState];
};