import React from 'react'
import { BsFillPenFill, BsFillInboxFill, BsFillTrash3Fill, BsFillExclamationOctagonFill, BsFillSendFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'

const items = [
    {
        id: "",
        title: "Inbox",
        icon: <BsFillInboxFill />
    },
    {
        id: "compose",
        title: "Compose",
        icon: <BsFillPenFill />
    },
    {
        id: "sent",
        title: "Sent",
        icon: <BsFillSendFill />
    },
    {
        id: "spam",
        title: "Spam",
        icon: <BsFillExclamationOctagonFill />
    },
    {
        id: "trash",
        title: "Trash",
        icon: <BsFillTrash3Fill />
    },
]

export const Sidebar = () => {
    const account = "shinichikudovu712@gmail.com"

    return (
        <div className='pb-4 md:py-4'>
            <Avatar account={account} />
            <nav>
                <ul className="w-full lg:w-1/3 flex flex-wrap justify-center md:flex-col gap-3 mt-4">
                    {
                        items.map(item => {
                            return (
                                <li key={item.id}>
                                    <NavLink to={item.id} end className={({ isActive }) =>
                                        isActive ? "btn bg-secondary-400 font-bold " : "btn"
                                    }>
                                        {item.icon}
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}
