import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectFighter = ({ fighters, weapons }) => {
    const navigation = useNavigate();
    const [selectedFighterId, setSelectedFighterId] = useState(null);
    const [selectedWeaponId, setSelectedWeaponId] = useState(null);

    function handleSelect() {
        if (selectedFighterId && selectedWeaponId) {
            // Assuming you want to navigate to a specific URL when both are selected
            navigation(`/fighterDisplay/${selectedFighterId}/${selectedWeaponId}`);
        } else {
            console.log('Please select both a fighter and a weapon.');
        }
    }

    const selectFighter = (fighterId) => {
        setSelectedFighterId(prevId => prevId === fighterId ? null : fighterId); // Toggle selection
    };

    const selectWeapon = (weaponId) => {
        setSelectedWeaponId(prevId => prevId === weaponId ? null : weaponId); // Toggle selection
    };

    return (
        <div className='selectFighterImage'>
            <div className="select-fighter">
                <h1 className='selectYourFighter underline'>Select Your Fighter</h1>
                <div className="fighters-list">
                    {fighters.map((fighter) => (
                        <div
                            key={fighter._id}
                            className={`fighter-item ${selectedFighterId === fighter._id ? 'selected' : ''}`}
                            onClick={() => selectFighter(fighter._id)}
                        >
                            <img src={fighter.img} alt={fighter.name} />
                            <h2 className='text-yellow-300'>{fighter.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className="select-fighter">
                <h1 className='selectYourFighter underline'>Select Your Weapon</h1>
                <div className="fighters-list">
                    {weapons.map((weapon) => (
                        <div
                            key={weapon._id}
                            className={`fighter-item ${selectedWeaponId === weapon._id ? 'selected' : ''}`}
                            onClick={() => selectWeapon(weapon._id)}
                        >
                            <img src={weapon.img} alt={weapon.name} />
                            <h2 className='text-yellow-300'>{weapon.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={handleSelect}>Continue</button>
            </div>
        </div>
    );
};

export default SelectFighter;