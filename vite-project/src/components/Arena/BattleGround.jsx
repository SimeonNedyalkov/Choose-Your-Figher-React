import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import rng from "../../customFunctions/rng"
import { useState } from "react";

export default function BattleGround(){
    const [fightResult, setFightResult] = useState(null);
    const {fighterId} = useParams()

    const pickedFighter = useFetch(`http://localhost:3030/data/fighters/${fighterId}`,[])
    const fighters = useFetch('http://localhost:3030/data/fighters',[])
    const weapons = useFetch('http://localhost:3030/data/weapons',[])
    const armors = useFetch('http://localhost:3030/data/armors',[])

    const randomEnemyFighter = rng.generateAll(fighters,weapons,armors)
    const pickedFighterWithRandomWeaponAndArmor = rng.generateWeaponAndArmor(pickedFighter,weapons,armors)
    
    const handleFight = () => {
        const resultFighter1 = rng.statsCalculator(pickedFighterWithRandomWeaponAndArmor)
        const resultFighter2 = rng.statsCalculator(randomEnemyFighter)
        console.log(resultFighter1)
        console.log(resultFighter2)
    };
    return (
        <div className="battleGroundImage">
            <div className="battleground-welcome">Welcome to the Battleground</div>
            <div className="yourFighter">
            <div className="battleground-fighter1-image"><img src={pickedFighterWithRandomWeaponAndArmor.fighter?.img} alt="" /></div>
            </div>
            <div className="enemyFighter">
            <div className="battleground-fighter2-image"><img src={randomEnemyFighter.fighter?.img} alt="" /></div>
            </div>
            <button onClick={handleFight}>Fight!</button>
        </div>
    )
}