import React from 'react'

// Display a tooltip (message display) when hover on element
export const TooltipContainer = ({ children, className, style, tooltip, tooltipStyle }) => {
    return (
        <div className={`group ${className}`} style={style}>
            {children}
            <div className={`hidden group-hover:block z-50 relative`} style={tooltipStyle}>
                {tooltip}
            </div>
        </div>
    )
}