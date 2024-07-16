import React from 'react';

const FighterDisplay = ({ fighter, weapon }) => {
    return (
        <>
        {fighter && (
            <div className="fighter-display">
            <img src={fighter?.img} alt={fighter?.name} className="fighter-image" />
            {weapon && <img src={weapon?.img} alt={weapon?.name} className="weapon-image" />}
            <div className="fighter-details">
                <h2>{fighter?.name}</h2>
                <p>{fighter?.description}</p>
                <h3>Stats</h3>
                <ul>
                    {Object.entries(fighter?.stats).map(([stat, value]) => (
                        <li key={stat}>{`${stat}: ${value}`}</li>
                    ))}
                </ul>
                {weapon && (
                    <>
                        <h3>Weapon: {weapon?.name}</h3>
                        <p>{weapon?.description}</p>
                        <h3>Weapon Stats</h3>
                        <ul>
                            {Object.entries(weapon?.stats).map(([stat, value]) => (
                                <li key={stat}>{`${stat} Boost: ${value}`}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
        )}
        </>
    );
};

export default FighterDisplay;