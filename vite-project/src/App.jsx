import { useState } from 'react'
import './App.css'
import Navigation from "../src/components/Navigation";
import Footer from './components/Footer';
import Main from './components/Main';
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
    <Main/>
    <Footer/>
    </div>
  )
}

export default App
