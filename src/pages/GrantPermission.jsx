import { useNavigate, useLocation, Navigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext";
import { checkPermissions } from '../hooks/usePermissionChecker'


export const GrantPermission = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { permissions, authorizator } = useAuthContext()

    const { ref } = location.state

    // If already granted permissions for ref location => Navigate to it
    const { ok, requires } = checkPermissions(ref.pathname, permissions)
    if (ok) {
        if (ref.pathname === "/me/grant")
            throw Error("UnExpected grant in grant")
        return <Navigate to={ref.pathname} replace />
    }

    const handleRegrantClick = () => {
        authorizator.incremental(requires, (granted, token) => {
            console.log("Incremental Successfully: permissions:", granted, token)
            navigate(ref.pathname, { replace: true })
        })
    }

    // Else, render grant page
    return (
        <span className='text-lg flex flex-col justify-center w-full h-full'>
            <span className="font-bold">
                Additional Permission Require
            </span>
            <br></br>
            <span className="italic">
                To open <b>[{ref.pathname}]</b>, you need to grant the application additional permissions. \nClick the button below to grant
            </span>
            <br></br>
            <button className="btn w-fit self-center" onClick={handleRegrantClick}>Grant additional Permissions</button>
        </span>
    )
}
