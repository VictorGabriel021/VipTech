import { useRef } from "react";

export default function useDebounce(fn: Function, delay: number) {
    const timeoutRef = useRef(0);
    function debouncedFn(...params: any) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = window.setTimeout(() => {
            fn(...params);
        }, delay);
    }

    return debouncedFn;
}
