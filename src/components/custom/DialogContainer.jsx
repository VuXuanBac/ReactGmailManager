import React, { useRef, useState } from 'react'

import { useOutsideClickHandler } from '../../hooks/useOutsideClickHandler'

// Display a dialog (interactable) when click on element
export const DialogContainer = ({ children, dialog, className = "", style, dialogStyle }) => {
    const [isShownDialog, setIsShownDialog] = useState(false);
    const containerRef = useRef(null)
    useOutsideClickHandler(containerRef.current, () => setIsShownDialog(false))

    return (
        <div ref={containerRef} className={`${className}`} style={style}
            onClick={() => setIsShownDialog(true)}
        >
            {children}
            <div className={`z-50${isShownDialog ? "" : " hidden"}`} style={dialogStyle}>
                {dialog}
            </div>
        </div>
    )
}
