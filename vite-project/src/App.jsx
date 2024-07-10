import { useState } from 'react'
import './App.css'
import Navigation from "../src/components/Navigation";
import Footer from './components/Footer';
import Main from './components/Main';
function App(props) {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLogedIn,setIsLogedIn] = useState(false)
    function isRegisteredClickHandler(){
      setIsRegistered(true)
  }
    function isRegisteredCloseHandler(){
      setIsRegistered(false)
      }
  
    function isLogedInCloseHandler(){
        setIsLogedIn(false)
    }
    function isLogedInClickHandler(){
        setIsLogedIn(true)
    }
  return (
    <div>
    <Navigation isRegisteredClickHandler={isRegisteredClickHandler} isLogedInClickHandler={isLogedInClickHandler}></Navigation>
    <Main isRegisteredCloseHandler={isRegisteredCloseHandler} isRegistered = {isRegistered}  isLogedInCloseHandler={isLogedInCloseHandler} isLogedIn = {isLogedIn}/>
    <Footer/>
    </div>
  )
}

export default App