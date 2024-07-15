import React from 'react';

export default function Champions({ fighters }) {
    return (
        <div className='allFighters'>
            {fighters.map(fighter => (
                <div key={fighter._id} className="fighter-card">
                    <img src={fighter.img} alt={fighter.name} className="fighter-image" />
                    <h3>{fighter.name}</h3>
                    <p>{fighter.type}</p>
                </div>
            ))}
        </div>
    );
}