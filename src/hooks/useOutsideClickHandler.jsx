import { useEffect } from "react"

/// On click outside `element`, call `handler`
export const useOutsideClickHandler = (element, handler) => {
    useEffect(() => {
        // Handler Wrapper
        function handleClickOutside(event) {
            if (element && !element.contains(event.target)) {
                handler(event);
            }
        }
        // Bindding
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [element]);
}