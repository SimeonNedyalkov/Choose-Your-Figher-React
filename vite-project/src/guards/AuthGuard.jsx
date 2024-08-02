import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../contexts/UserContext"

export default function AuthGuard(){
    const {isAuthenticated} = useAuthContext()
    return isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
}