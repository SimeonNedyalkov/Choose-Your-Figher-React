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
import {useNavigate} from 'react-router-dom'
import {
  Routes,
  Route,
  } from 'react-router-dom';
  
function App(props) {
  
  const navigation = useNavigate()
    function isRegisteredCloseHandler(){
      navigation('/')
      }
  
    function isLogedInCloseHandler(){
        navigation('/')
    }
    
    function isLogoutCloseHandler(){

      navigation('/')
    }
    
  return (
    <div className="min-h-screen flex flex-col">
      <div className='flex-grow'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register isRegisteredCloseHandler={isRegisteredCloseHandler}/>}/>
          <Route path='/login' element={<Login isLogedInCloseHandler={isLogedInCloseHandler}/>}/>
          <Route path='/logout' element={<Logout isLogoutCloseHandler={isLogoutCloseHandler}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/champions' element={<Champions/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
