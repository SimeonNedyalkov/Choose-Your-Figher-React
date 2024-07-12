import Home from "./Home"
import Register from "./userComponents/Register"
import Login from "./userComponents/Login"
import About from "./About"
import Logout from "./userComponents/Logout"
// import Fighter from "./Fighters"
// import {getAllFighters} from '../sevices/data'
export default function Main({
    isRegisteredCloseHandler,
    isRegistered,
    isLogedInCloseHandler,
    isLogedIn,
    isLogout,
    isLogoutCloseHandler
}){
    
    return (
        <>
        <Home></Home>
        {isRegistered && <Register isRegisteredCloseHandler={isRegisteredCloseHandler}/>}
        {isLogedIn && <Login isLogedInCloseHandler={isLogedInCloseHandler}/>}
        {isLogout && <Logout isLogoutCloseHandler={isLogoutCloseHandler}/>}
        </>
    )
}