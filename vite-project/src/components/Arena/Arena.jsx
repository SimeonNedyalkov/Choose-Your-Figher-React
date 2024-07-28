import getElementEmoji from "../../customFunctions/elements";
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom"

export default function Arena() {
    const fighters = useFetch('http://localhost:3030/data/fighters', []);
    
    return (
        <div className="arenaBackground">
            <div className="chooseFighter">
                Choose your fighter:
            </div>
            <div className="fightersContainer">
                {fighters.map((fighter) => (
                    <div key={fighter._id} className="fighterCard">
                        <div className="imageBox">
                            <img src={fighter.img} alt={fighter.name} className="fighterImage"/>
                        </div>
                        <div className="fighterName">{fighter.name}</div>
                        <div className="fighterElement">
                            {fighter.element} {getElementEmoji(fighter.element)}
                        </div>
                        <Link to={`/battleground/${fighter._id}`} className="hover:no-underline flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">Pick</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
