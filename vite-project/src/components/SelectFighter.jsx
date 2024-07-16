import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectFighter = ({ fighters, weapons }) => {
    const navigation = useNavigate();
    const [selectedFighterId, setSelectedFighterId] = useState(null);
    const [selectedWeaponId, setSelectedWeaponId] = useState(null);

    function handleSelect() {
        if (selectedFighterId && selectedWeaponId) {
            console.log(`Selected Fighter id: ${selectedFighterId}`);
            console.log(`Selected Weapon id: ${selectedWeaponId}`);
            // Assuming you want to navigate to a specific URL when both are selected
            navigation(`/fighterDisplay/${selectedFighterId}/${selectedWeaponId}`);
        } else {
            console.log('Please select both a fighter and a weapon.');
        }
    }

    const selectFighter = (fighterId) => {
        setSelectedFighterId(fighterId);
    };

    const selectWeapon = (weaponId) => {
        setSelectedWeaponId(weaponId);
    };

    return (
        <div>
            <div className="select-fighter">
                <h1>Select Your Fighter</h1>
                <div className="fighters-list">
                    {fighters.map((fighter) => (
                        <div
                            key={fighter._id}
                            className={`fighter-item ${selectedFighterId === fighter._id ? 'selected' : ''}`}
                            onClick={() => selectFighter(fighter._id)}
                        >
                            <img src={fighter.img} alt={fighter.name} />
                            <h2>{fighter.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className="select-fighter">
                <h1>Select Your Weapon</h1>
                <div className="fighters-list">
                    {weapons.map((weapon) => (
                        <div
                            key={weapon._id}
                            className={`fighter-item ${selectedWeaponId === weapon._id ? 'selected' : ''}`}
                            onClick={() => selectWeapon(weapon._id)}
                        >
                            <img src={weapon.img} alt={weapon.name} />
                            <h2>{weapon.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <button onClick={handleSelect}>Select Fighter and Weapon</button>
            </div>
        </div>
    );
};

export default SelectFighter;