import getElementEmoji from "../../customFunctions/elements";
import useFetch from "../../hooks/useFetch";

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
                        <button className="pickButton">Pick</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
