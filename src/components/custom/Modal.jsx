import React from 'react'

export const Modal = ({ children, onClose }) => {
    return (
        <div className="w-full h-screen bg-modal z-50 fixed top-0 left-0">
            <div className="w-3/4 lg:w-1/2 max-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </div>
    )
}
