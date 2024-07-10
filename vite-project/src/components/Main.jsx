import Home from "./Home"
import Register from "./Register"
export default function Main({
    isRegisteredCloseHandler,
    isRegistered
}){
    
    return (
        <>
        <Home></Home>
        {isRegistered && <Register isRegisteredCloseHandler={isRegisteredCloseHandler}/>}
        </>
    )
}