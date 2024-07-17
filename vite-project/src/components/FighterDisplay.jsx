import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const FighterDisplay = () => {
    const {fighterId,weaponId,armorId} = useParams();
    const [fighter, setFighter] = useState({});
    const [weapon, setWeapon] = useState({});
    const [armor, setArmor] = useState({});
    const navigation = useNavigate()
    useEffect(() => {
        const fetchFighterData = async () => {
            try {
                const response = await fetch(`http://localhost:3030/data/fighters/${fighterId}`);
                const res = await response.json();
                setFighter(res);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchFighterData();
    }, []);

    useEffect(() => {
        const fetchWeaponData = async () => {
            try {
                const response = await fetch(`http://localhost:3030/data/weapons/${weaponId}`);
                const res = await response.json();
                setWeapon(res);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchWeaponData();
    }, []);
    useEffect(() => {
        const fetchArmorData = async () => {
            try {
                const response = await fetch(`http://localhost:3030/data/armors/${armorId}`);
                const res = await response.json();
                setArmor(res);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchArmorData();
    }, []);

    function goBack(){
        navigation('/selectFighter')
    }

    const calculateCombinedStats = () => {
        let combinedStats = {};
        if (fighter.stats && weapon.stats && armor.stats) {
            Object.entries(fighter.stats).forEach(([stat, value]) => {
                combinedStats[stat] = value;
            });
            Object.entries(weapon.stats).forEach(([stat, value]) => {
                if (combinedStats[stat]) {
                    combinedStats[stat] += value;
                } else {
                    combinedStats[stat] = value;
                }
            });
            Object.entries(armor.stats).forEach(([stat, value]) => {
                if (combinedStats[stat]) {
                    combinedStats[stat] += value;
                } else {
                    combinedStats[stat] = value;
                }
            });
        }
        return combinedStats;
    };
    const combinedStats = calculateCombinedStats();
    return (
        <div className='fighterDisplayImage'>
        <div className="fighter-display">
            <div className="fighter-details">
                <div>
                {combinedStats && (
                    <>
                        <div className='descAndImages'>
                        <h3 className='transparent-box'><br/>{fighter.name} with {weapon.name} and {armor.name}</h3>
                        <div className='imagesOnly'>
                            <img src={fighter.img} alt={fighter.name} className="fighter-image1" />
                            <img src={weapon.img} alt={weapon.name} className="weapon-image" />
                            <img src={armor.img} alt={armor.name} className="weapon-image" />
                        </div>
                        </div>
                        <div className='fighter-stats'>
                        <table>
                            <tbody>
                                {Object.entries(combinedStats).map(([stat, value]) => (
                                    <tr key={stat}>
                                        <td><strong>{stat}</strong></td>
                                        <td className='blueishStats'>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </>
                )}
                <button onClick={goBack} className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Go Back</button>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default FighterDisplay;