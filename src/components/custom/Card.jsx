import React from 'react'

// Custom card (rounded border container) with head/headless
export const Card = ({ header = "", left = true, className = "", headerClassName = "", headerTitle = "", children }) => {
    if (header) {
        return (
            <section className={`rounded-lg shadow-lg border-2 bg-white`}>
                <span title={headerTitle}
                    className={`${left ? "float-left mr-3" : "float-right ml-3"} cursor-pointer px-3 font-bold italic h-full bg-primary-300 overflow-hidden flex justify-center items-center ${headerClassName}`}>
                    {header}
                </span>
                <div className={`p-3 gap-3 ${className}`}>
                    {children}
                </div>
            </section>
        )
    }

    return (
        <section className={`rounded-lg shadow-lg border-2 bg-white p-3 gap-3 ${className}`}>
            {children}
        </section>
    )

}
