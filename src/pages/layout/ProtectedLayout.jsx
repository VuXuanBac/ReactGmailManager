import { Outlet, Navigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'

export const ProtectedLayout = () => {
    console.log("Render Protected Layout")
    const { isSignedIn } = useAuthContext()

    return (
        // <Outlet />
        isSignedIn ? <Outlet /> : <Navigate to="/" />
    )
}
