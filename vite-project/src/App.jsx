import { useState,useEffect } from 'react'
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
import Events from './components/Events';
import ChampionsDetails from './components/ChampionDetails';
import Weapons from './components/Weapons';
import WeaponDetails from './components/WeaponDetails';
import FighterDisplay from './components/FighterDisplay';
import SelectFighter from './components/SelectFighter';
import {useNavigate} from 'react-router-dom'
import {
  Routes,
  Route,
  } from 'react-router-dom';
import Armors from './components/Armors';
import ArmorDetails from './components/ArmorDetails';

function App(props) {
  const [fighters,setFighters] = useState([])
  const [weapons,setWeapons] = useState([])
  const [armors,setArmors] = useState([])
  useEffect(() => {
    const fetchFighterData = async () => {
      try {
        const response = await fetch('http://localhost:3030/data/fighters');
        const res = await response.json();
        setFighters(res)
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFighterData()
  }, []);
  useEffect(()=>{
    const fetchWeaponData = async () => {
      try {
        const response = await fetch('http://localhost:3030/data/weapons')
        const res = await response.json()
        setWeapons(res)
        console.log(res)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchWeaponData()
  },[])
  useEffect(() => {
    const fetchArmorsData = async () => {
      try {
        const response = await fetch('http://localhost:3030/data/armors');
        const res = await response.json();
        setArmors(res)
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchArmorsData()
  }, []);
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
          <Route path='/events' element={<Events/>}/>
          <Route path='/champions' element={<Champions fighters={fighters}/>}/>
          <Route path='/champions/:id' element={<ChampionsDetails/>}/>
          <Route path='/weapons' element={<Weapons weapons={weapons}/>}/>
          <Route path='/weapons/:id' element={<WeaponDetails/>}/>
          <Route path='/armors' element={<Armors armors={armors}/>}/>
          <Route path='/armors/:id' element={<ArmorDetails/>}/>
          <Route path='/selectFighter' element={<SelectFighter fighters={fighters} weapons={weapons}/>}/>
          <Route path='/fighterDisplay/:fighterId/:weaponId' element={<FighterDisplay fighters={fighters} weapons={weapons}/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
