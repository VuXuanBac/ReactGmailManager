import { useAuthContext } from '../contexts/AuthContext'
import { useLocation } from 'react-router-dom'
import { REQUIRE_PERMISSIONS } from '../data/pageconfigs'


export const checkPermissions = (pathname, grantedPermissions) => {
    const requirePermissions = REQUIRE_PERMISSIONS[pathname]
    return {
        ok: requirePermissions ? requirePermissions.split().every((c) => grantedPermissions.includes(c)) : true,
        requires: requirePermissions,
    }
}

export const usePermissionChecker = () => {
    const location = useLocation()
    const { permissions } = useAuthContext()

    return { ...checkPermissions(location.pathname, permissions), location }
}