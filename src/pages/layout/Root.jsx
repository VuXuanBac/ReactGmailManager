import { Navigate, Outlet } from 'react-router-dom'

import { Header } from './Header'
import { useAuthContext } from '../../contexts/AuthContext'

export const Root = () => {
    console.log("Render Root")

    const { isSignedIn } = useAuthContext()

    return (
        <>
            <Header />
            <Outlet />
            {isSignedIn && <Navigate to="me" replace />}
        </>
    )
}
