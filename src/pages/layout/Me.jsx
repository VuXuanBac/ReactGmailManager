import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

// import { REQUIRE_PERMISSIONS } from '../../data/pageconfigs'
import { usePermissionChecker } from '../../hooks/usePermissionChecker'

export const Me = () => {

    const { ok, requires, location } = usePermissionChecker()
    console.log("Render Me on Location", location, requires)

    if (!ok) {
        console.log("Navigate to Grant, ref =", location.pathname)
        return <Navigate to="/me/grant" replace state={{
            ref: location
        }} />
    }

    return (
        <main className='flex flex-col-reverse md:flex-row w-full md:w-3/4 xl:w-2/3 justify-center md:mx-auto'>
            <article className='flex flex-col gap-3 w-full max-w-full md:m-3 px-2'>
                <Outlet />
            </article>
            <Sidebar />
        </main>
    )
}
