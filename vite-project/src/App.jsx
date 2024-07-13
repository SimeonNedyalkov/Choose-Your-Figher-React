import { useState } from 'react'
import './index.css'
import Navigation from "../src/components/Navigation";
import Footer from './components/Footer';
import Home from './components/Home'
import Register from './components/userComponents/Register'
import Login from './components/userComponents/Login'
import Logout from './components/userComponents/Logout'
import About from './components/About'
import Error from './components/Error'
import Champions from './components/Champions'
// import Main from './components/Main';
import {
  Routes,
  Route,
  } from 'react-router-dom';
  
function App(props) {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLogedIn,setIsLogedIn] = useState(false)
  const [isLogout,setIsLogout] = useState(false)
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
    function isLogoutCloseHandler(){
      setIsLogout(false)
    }
    function isLogoutClickHandler(){
      setIsLogout(true)
    }
  return (
    <div className="min-h-screen flex flex-col">
    <Navigation isRegisteredClickHandler={isRegisteredClickHandler} isLogedInClickHandler={isLogedInClickHandler} isLogoutClickHandler={isLogoutClickHandler}></Navigation>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register isRegisteredCloseHandler={isRegisteredCloseHandler} isRegistered={isRegistered}/>}/>
      <Route path='/login' element={<Login isLogedInCloseHandler={isLogedInCloseHandler} isLogedIn={isLogedIn}/>}/>
      <Route path='/logout' element={<Logout isLogoutCloseHandler={isLogoutCloseHandler} isLogout={isLogout}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/champions' element={<Champions/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <div className='flex-grow'>
    
    
    
    
        
    </div>
    <Footer/>
    </div>
  )
}

export default App
