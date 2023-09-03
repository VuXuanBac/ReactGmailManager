import React from 'react'

import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export const Me = () => {
    return (
        <main className='flex flex-col-reverse md:flex-row w-full md:w-3/4 xl:w-2/3 justify-center md:mx-auto'>
            <article className='flex flex-col gap-3 w-full max-w-full md:m-3 px-2'>
                <Outlet />
            </article>
            <Sidebar />
        </main>
    )
}
