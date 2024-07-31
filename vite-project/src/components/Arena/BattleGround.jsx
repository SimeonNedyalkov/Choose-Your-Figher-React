import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

export default function BattleGround(){
    const {fighterId} = useParams()
    console.log(fighterId)
    const pickedFighter = useFetch(`http://localhost:3030/data/fighters/${fighterId}`,[])
    console.log(pickedFighter)
    return (
        <div className="battleGroundImage">
            <div>Welcome to the Battleground</div>
            <div>{pickedFighter.name}</div>
        </div>
    )
}