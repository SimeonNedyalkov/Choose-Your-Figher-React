import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import About from "./About"
// import Fighter from "./Fighters"
// import {getAllFighters} from '../sevices/data'
export default function Main({
    isRegisteredCloseHandler,
    isRegistered,
    isLogedInCloseHandler,
    isLogedIn
}){
    
    return (
        <>
        <Home></Home>
        {isRegistered && <Register isRegisteredCloseHandler={isRegisteredCloseHandler}/>}
        {isLogedIn && <Login isLogedInCloseHandler={isLogedInCloseHandler}/>}
        </>
    )
}