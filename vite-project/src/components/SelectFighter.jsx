import React from 'react';
import {useNavigate} from 'react-router-dom'

const SelectFighter = ({fighters}) => {    
    const navigation = useNavigate()
    function handleSelect(fighterId){
        console.log(`Fighter id: ${fighterId}`)
        navigation(`/fighterDisplay/${fighterId}`)
    }
    return (
        <div className="select-fighter">
            <h1>Select Your Fighter</h1>
            <div className="fighters-list">
                {Object.keys(fighters).map((fighterId) => (
                    <div
                        key={fighterId}
                        className="fighter-item"
                        onClick={() => handleSelect(fighters[fighterId]._id)}
                    >
                        <img src={fighters[fighterId].img} alt={fighters[fighterId].name} />
                        <h2>{fighters[fighterId].name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectFighter;