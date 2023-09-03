import React from 'react'
import { ImSearch } from 'react-icons/im'

// Custom search box
export const SearchBox = ({ className }) => {
    return (
        <div className={`flex items-center relative ${className}`}>
            <ImSearch className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-500' />
            <input type='text'
                className="rounded-xl border-2 pl-9 py-1 text-sm focus:outline-none active:outline-none w-full"
                placeholder='Search ...' />
        </div>
    )
}
