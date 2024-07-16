import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FighterDisplay = () => {
    const params = useParams();
    const [fighter, setFighter] = useState({});
    const [weapon, setWeapon] = useState({});

    useEffect(() => {
        const fetchFighterData = async () => {
            try {
                const response = await fetch(`http://localhost:3030/data/fighters/${params.id}`);
                const res = await response.json();
                setFighter(res);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchFighterData();
    }, [params.id]); // Include params.id in dependencies to fetch data when it changes

    useEffect(() => {
        const fetchWeaponData = async () => {
            try {
                const response = await fetch(`http://localhost:3030/data/weapons/1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6`);
                const res = await response.json();
                setWeapon(res);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchWeaponData();
    }, []);

    
    const calculateCombinedStats = () => {
        let combinedStats = {};
        if (fighter.stats && weapon.stats) {
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
        }
        return combinedStats;
    };
    const combinedStats = calculateCombinedStats();
    return (
        <div className="fighter-display">
            <img src={fighter.img} alt={fighter.name} className="fighter-image" />
            <img src={weapon.img} alt={weapon.name} className="weapon-image" />
            <div className="fighter-details">
                <h2>{fighter.name}</h2>
                {combinedStats && (
                    <>
                        <h3>Combined Stats</h3>
                        <ul>
                            {Object.entries(combinedStats).map(([stat, value]) => (
                                <li key={stat}>{`${stat}: ${value}`}</li>
                            ))}
                        </ul>
                    </>
                )}
                
            </div>
        </div>
    );
};

export default FighterDisplay;