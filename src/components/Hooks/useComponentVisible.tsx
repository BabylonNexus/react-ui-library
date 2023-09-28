
import { useState, useRef, useEffect } from 'react'

export default function useComponentVisible(initial: boolean) {
    const [isVisible, setIsVisible] = useState<boolean>(initial)
    const ref: any = useRef(null)


    const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current?.contains(e?.target as Node)) {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)

        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [])

    return (
        { ref, isVisible, setIsVisible }
    )
}

