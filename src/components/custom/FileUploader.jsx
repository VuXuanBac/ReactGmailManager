import React, { useState } from 'react'

/// Custom UI for <input type="file" />
export const FileUploader = ({ children, value, onChange, disabled, accept, multiple, className }) => {
    return (
        <label style={{ cursor: "pointer" }} className={className}>
            <input
                value={value}
                accept={accept}
                disabled={disabled}
                style={{ display: 'none' }}
                multiple={multiple}
                type="file"
                onChange={disabled ? () => { } : onChange}
            />
            {children}
        </label>
    );
};