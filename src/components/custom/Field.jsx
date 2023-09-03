import React from 'react'

// Custom editable/non-editable field + display with label
export const Field = ({ collapsible = false, label, className, editable = true, value = "" }) => {
    const valueClassName = `px-2 py-1 border-b border-black flex-auto mx-2 focus:outline-none active:outline-none ${collapsible ? "hidden hover:inline" : ""} ${className}`;

    return (
        <label className={`flex justify-between items-baseline text-sm ${collapsible ? "hover:order-first hover:w-full" : "w-full min-w-[100px] order-first"}`}>
            <span className='peer rounded-lg cursor-pointer border-black border flex min-w-[64px] justify-center items-center p-1'>
                {label}
            </span>
            {
                editable ?
                    <input className={valueClassName} defaultValue={value} />
                    :
                    <span className={valueClassName}>{value}</span>
            }
        </label>
    )
}