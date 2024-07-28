import useFetch from "../../hooks/useFetch";

export default function Arena() {
    const fighters = useFetch('http://localhost:3030/data/fighters',[])
    return (
        <div className="arenaBackground">
            <div className="chooseFighter">
                Choose your fighter:
            </div>
            <div className="fightersContainer">
                {fighters.map((fighter) => (
                    <div key={fighter._id} className="fighterCard">
                        <img src={fighter.img} alt={fighter.name} className="fighterImage"/>
                        <div className="fighterName">{fighter.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}