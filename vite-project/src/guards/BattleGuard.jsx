import { useLocation,Navigate, Outlet } from "react-router-dom";

export default function BattleGuard(){
    const location = useLocation()
    const {pickedFighter,enemyFighter} = location.state || {}
    return pickedFighter && enemyFighter ? <Outlet/> : <Navigate to={'/error'}/>
}