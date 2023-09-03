import React, { useState } from 'react'

export const LabelList = ({ labels, onItemClick, className }) => {
    // const [files, setFiles] = useState(data);
    const value = labels ? labels : data;
    return (
        <ul className={`flex items-center flex-wrap gap-2 ${className}`}>
            {
                value.map((label, index) =>
                    <li key={index} onClick={onItemClick} className='btn-secondary bg-secondary-500 not-italic rounded-none'>
                        {label.name}
                    </li>
                )
            }
        </ul>
    )
}
