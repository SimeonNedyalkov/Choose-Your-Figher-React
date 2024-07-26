// hooks
import useFetch from './hooks/useFetch';
import {useNavigate} from 'react-router-dom'
import UserContext from './contexts/UserContext';

import Navigation from "../src/components/Navigation";
import Footer from './components/Footer';
import Home from './components/Home'
import Register from './components/userComponents/Register'
import Login from './components/userComponents/Login'
import Logout from './components/userComponents/Logout'
import About from './components/About'
import Error from './components/Error'
import Champions from './components/champions/Champions'
import Events from './components/Events';
import ChampionsDetails from './components/champions/ChampionDetails';
import Weapons from './components/weapons/Weapons';
import WeaponDetails from './components/weapons/WeaponDetails';
import FighterDisplay from './components/FighterDisplay';
import CheckFighter from './components/CheckFighter';
import Armors from './components/armors/Armors';
import ArmorDetails from './components/armors/ArmorDetails';

// css
import './styles/base.css'

// routes
import {Routes,Route,} from 'react-router-dom';
import CreateChampion from './components/champions/CreateChampion';
import { useState } from 'react';

function App(props) {
  const navigation = useNavigate()
  const [authState,setAuthstate] = useState({})

  const fighters = useFetch('http://localhost:3030/data/fighters',[])
  const weapons = useFetch('http://localhost:3030/data/weapons',[])
  const armors = useFetch('http://localhost:3030/data/armors',[])
  
  const changeAuthState = (state) =>{
    // Fix this, bc its bullshit, by implementing persistant auth state
    localStorage.setItem('accessToken',state.accessToken)
    setAuthstate(state)
  }
  const contextData = {
    email:authState.email,
    accessToken:authState.accessToken,
    isAuthenticated:!!authState.email,
    changeAuthState
  }

  
  function goBackHome(){
    navigation('/')
    }
  
  return (
    <UserContext.Provider value={contextData}>
    <div className="min-h-screen flex flex-col">
      <div className='flex-grow'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register goBackHome={goBackHome}/>}/>
          <Route path='/login' element={<Login goBackHome={goBackHome}/>}/>
          <Route path='/logout' element={<Logout goBackHome={goBackHome}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/armory/champions' element={<Champions fighters={fighters}/>}/>
          <Route path='/armory/champions/:id' element={<ChampionsDetails/>}/>
          <Route path='createChampion' element={<CreateChampion goBackHome={goBackHome}/>}/>
          <Route path='/armory/weapons' element={<Weapons weapons={weapons}/>}/>
          <Route path='/armory/weapons/:id' element={<WeaponDetails/>}/>
          <Route path='/armory/armors' element={<Armors armors={armors}/>}/>
          <Route path='/armory/armors/:id' element={<ArmorDetails/>}/>
          <Route path='/armory/checkFighter' element={<CheckFighter fighters={fighters} weapons={weapons} armors={armors}/>}/>
          <Route path='/armory/fighterDisplay/:fighterId/:weaponId/:armorId' element={<FighterDisplay fighters={fighters} weapons={weapons}/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </UserContext.Provider>
  )
}

export default App
