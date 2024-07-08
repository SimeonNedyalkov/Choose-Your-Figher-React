import { useState } from "react"
export default function Home(){
    const [count,setCount] = useState(0)
    function clickHandler(){
        setCount(oldState => count + 1)
        console.log(count)
    }
    return(
        <>
        <div tabIndex={0} onKeyDown={clickHandler}>
        <h1 className="title">Choose your Fighter!</h1>
        <h4>Pick your fighter, choose your weapon, and prepare for battle!</h4>
        <div>PRESS ANY BUTTON</div>
        </div>
        </>
    )
}