import { useState } from 'react'
import './App.css'
import Home from "../src/components/Home"
import Navigation from "../src/components/Navigation";
import Register from './components/Register';
function App() {
  const [isRegistered, setIsRegistered] = useState(false)
  function isRegisteredClickHandler(){
    setIsRegistered(true)
}
function isRegisteredCloseHandler(){
  setIsRegistered(false)
}
  return (
    <div>
    <Navigation isRegisteredClickHandler={isRegisteredClickHandler}></Navigation>
    <Home></Home>
    {isRegistered && <Register isRegisteredCloseHandler={isRegisteredCloseHandler}/>}
    </div>
  )
}

export default App
