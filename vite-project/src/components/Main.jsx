import Home from "./Home"
import Register from "./Register"
import { useState } from "react"
export default function Main(props){
    const [isRegistered, setIsRegistered] = useState(false)
    function isRegisteredClickHandler(){
        setIsRegistered(true)
    }
    function isRegisteredCloseHandler(){
    setIsRegistered(false)
    }
    return (
        <>
        <Home></Home>
        {isRegistered && <Register isRegisteredCloseHandler={isRegisteredCloseHandler}/>}
        </>
    )
}