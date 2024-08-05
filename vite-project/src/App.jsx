// hooks
import {useNavigate} from 'react-router-dom'

// context
import AuthContextProvider from './contexts/UserContext';

// components
import Navigation from "../src/components/Navigation";
import Footer from './components/Footer';
import Home from './components/Home'
import Register from './components/userComponents/Register'
import Login from './components/userComponents/Login'
import Logout from './components/userComponents/Logout'
import About from './components/About'
import Error from './components/Error'
import Champions from './components/champions/Champions'
import ChampionsDetails from './components/champions/ChampionDetails';
import Weapons from './components/weapons/Weapons';
import WeaponDetails from './components/weapons/WeaponDetails';
import FighterDisplay from './components/FighterDisplay';
import CheckFighter from './components/CheckFighter';
import Armors from './components/armors/Armors';
import ArmorDetails from './components/armors/ArmorDetails';
import CreateChampion from './components/champions/CreateChampion';
import MyProfile from './components/userComponents/MyProfile';
import Arena from './components/Arena/Arena';
import BattleGround from './components/Arena/BattleGround';
import Win from './components/afterBattle/Win';
import AuthGuard from './guards/AuthGuard';
import EditChampion from './components/champions/EditChampion';
import Draw from './components/afterBattle/Draw';
import Lose from './components/afterBattle/Lose';
import Events2 from './components/Events';
import BattleSimulation from './components/Arena/BattleSimulation';

// css
import './styles/base.css'

// routes
import {Routes,Route,} from 'react-router-dom';

function App(props) {
  const navigation = useNavigate()

  function goBackHome(){
    navigation('/')
    }
  
  return (
    <AuthContextProvider>
    <div className="min-h-screen flex flex-col">
      <div className='flex-grow'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register goBackHome={goBackHome}/>}/>
          <Route path='/login' element={<Login goBackHome={goBackHome}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/events' element={<Events2/>}/>

          <Route path='/armory/champions' element={<Champions/>}/>
          <Route path='/armory/champions/:id' element={<ChampionsDetails/>}/>
          <Route path='/armory/weapons' element={<Weapons/>}/>
          <Route path='/armory/weapons/:id' element={<WeaponDetails/>}/>
          <Route path='/armory/armors' element={<Armors/>}/>
          <Route path='/armory/armors/:id' element={<ArmorDetails/>}/>
          <Route path='/armory/checkFighter' element={<CheckFighter/>}/>
          <Route path='/armory/fighterDisplay/:fighterId/:weaponId/:armorId' element={<FighterDisplay/>}/>

          <Route path='/win/:fighterId/:enemyId' element={<Win/>}/>
          <Route path='/draw/:fighterId/:enemyId' element={<Draw/>}/>
          <Route path='/lose/:fighterId/:enemyId' element={<Lose/>}/>

          <Route element={<AuthGuard/>}>
          <Route path='/arena' element={<Arena/>}/>
          <Route path='/battleground/:fighterId' element={<BattleGround/>}/>
          <Route path='/battleground/battle-simulation/:fighterId/:enemyId' element={<BattleSimulation/>}/>
          <Route path='/createChampion' element={<CreateChampion goBackHome={goBackHome}/>}/>
          <Route path='/my-profile' element={<MyProfile goBackHome={goBackHome}/>}/>
          <Route path='/editChampion/:fighterId' element={<EditChampion goBackHome={goBackHome}/>}/>
          <Route path='/logout' element={<Logout goBackHome={goBackHome}/>}/>
          </Route>

          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </AuthContextProvider>
  )
}

export default App
