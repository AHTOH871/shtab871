import { useState } from "react";

const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => setIsOpen(false);

    return { isOpen, toggle, close };
}

export default useToggle;