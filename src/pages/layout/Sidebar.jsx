import { NavLink } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'

import { NAV } from "../../data/pageconfigs"

export const Sidebar = () => {
    const account = "shinichikudovu712@gmail.com"

    return (
        <div className='pb-4 md:py-4'>
            <Avatar account={account} />
            <nav>
                <ul className="w-full lg:w-1/3 flex flex-wrap justify-center md:flex-col gap-3 mt-4">
                    {
                        NAV.map(item => {
                            return (
                                !item.hidden && <li key={item.link}>
                                    <NavLink to={item.link} end className={({ isActive }) =>
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
