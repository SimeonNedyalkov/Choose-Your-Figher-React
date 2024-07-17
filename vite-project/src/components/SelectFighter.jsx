import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectFighter = ({ fighters, weapons,armors }) => {
    const navigation = useNavigate();
    const [selectedFighterId, setSelectedFighterId] = useState(null);
    const [selectedWeaponId, setSelectedWeaponId] = useState(null);
    const [selectedArmorId, setSelectedArmorId] = useState(null);

    function handleSelect() {
        if (selectedFighterId && selectedWeaponId && selectedArmorId) {
            // Assuming you want to navigate to a specific URL when both are selected
            navigation(`/fighterDisplay/${selectedFighterId}/${selectedWeaponId}/${selectedArmorId}`);
        } else {
            console.log('Please select a fighter, a weapon and an armor.');
        }
    }

    const selectFighter = (fighterId) => {
        setSelectedFighterId(prevId => prevId === fighterId ? null : fighterId);
    };

    const selectWeapon = (weaponId) => {
        setSelectedWeaponId(prevId => prevId === weaponId ? null : weaponId); 
    };
    const selectArmor = (armorId) => {
        setSelectedArmorId(prevId => prevId === armorId ? null : armorId); 
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
            <div className="select-fighter">
                <h1 className='selectYourFighter underline'>Select Your Armor</h1>
                <div className="fighters-list">
                    {armors.map((armor) => (
                        <div
                            key={armor._id}
                            className={`fighter-item ${selectedArmorId === armor._id ? 'selected' : ''}`}
                            onClick={() => selectArmor(armor._id)}
                        >
                            <img src={armor.img} alt={armor.name} />
                            <h2 className='text-yellow-300'>{armor.name}</h2>
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